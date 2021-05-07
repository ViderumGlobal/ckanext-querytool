from __future__ import print_function
import logging
import requests

from ckan.lib.cli import CkanCommand
from ckan.lib.search import rebuild
import ckan.model as model
import ckan.logic as logic
from ckan.plugins import toolkit
import os
from sqlalchemy import exc

log = logging.getLogger(__name__)


RESOURCES = {
    u'ac98ee9a-0193-49ed-b0c3-c6d2b9a9090e': 'steps_portal_alcohol.csv',
    u'7e41b140-d68d-4f95-84ef-99026798d63e': 'steps_portal_alcohol_vn.csv',
    u'd515cca7-612f-4840-8b07-14277146ef99': 'steps_portal_cholesterol.csv',
    u'17b6135e-0690-4100-b680-5aeaed77b923': 'steps_portal_cholesterol_vn.csv',
    u'c298ca18-2944-4484-a484-3025f24b3c5c': 'steps_portal_diabetes_time.csv',
    u'8160b9cf-b6d0-4b2b-8b19-7ba9a86518a7': 'steps_portal_diabetes_time_vn.csv',
    u'd7271660-0dfc-4ab6-b30b-c7b3118db3d2': 'steps_portal_diet.csv',
    u'8b7d278e-d7c7-45f9-8e4b-9829a39beb94': 'steps_portal_diet_vn.csv',
    u'0bb6a5ce-4d1d-4e77-973c-afe062c8dcc8': 'steps_portal_hypertension.csv',
    u'7359dc1d-a43c-4152-bf87-dd6401088505': 'steps_portal_hypertension_vn.csv',
    u'4e007771-3f88-414e-abf5-85fa324cd5ef': 'steps_portal_obesity.csv',
    u'ebc56be4-8271-498b-bb6a-f7011ae5b3cf': 'steps_portal_obesity_vn.csv',
    u'f0f749d3-25f4-4f4f-9a24-7277d68d5d24': 'steps_portal_others.csv',
    u'63cdb7a4-9ecf-4d55-a795-4d1a4756166d': 'steps_portal_others_vn.csv',
    u'afac1e1a-fa53-485c-8059-05ab40e9a148': 'steps_portal_physical.csv',
    u'10f93403-63aa-453e-8090-186b1915f5bd': 'steps_portal_physical_vn.csv',
    u'bd2b92f0-2e53-433f-8103-2e29c7082cff': 'steps_portal_tobacco.csv',
    u'9fceacf5-e2a0-4632-b66c-fafd324f4b18': 'steps_portal_tobacco_bd.csv'
}


class SeedData(CkanCommand):
    """Seed the portal with test, organization, groups,
       datasets, reports, and visualizations
    """
    summary = __doc__.split('\n')[0]
    usage = __doc__
    max_args = 0
    min_args = 0

    def command(self):
        self._load_config()
        get_admin = raw_input('\nEnter the admin login name: ')
        get_admin_api_key = raw_input('\nEnter the admin API key: ')

        try:
            admin = toolkit.get_action('user_show')({}, {'id': get_admin})
        except logic.NotFound:
            print('\nERROR: "{}" is not a valid name. Try again.\n'
                  .format(get_admin))
            quit()

        admin_id = str(admin.get('id'))

        connection = model.Session.connection()
        current_path = os.path.dirname(__file__)
        seed_path = os.path.join(current_path, '..', 'seed', 'dump.sql')
        seed_resource_dir = os.path.join(current_path, '..', 'seed', 'resources')

        sql = ""

        with open(seed_path, 'r') as f:
            sql = f.read()

        sql = sql.replace('CKAN_ADMIN_ID', admin_id)
        sql = sql.replace('CKAN_ADMIN_NAME', get_admin)

        try:
            connection.execute(sql)
        except exc.IntegrityError:
            log.error('ERROR: The DB has existing data that\'s conflicting with '
                      'this tool. This command must be run on a fresh DB.')
            print('\nERROR: The DB has existing data that\'s conflicting with '
                  'this tool. This command must be run on a fresh DB.\n')
            quit()

        model.Session.commit()

        log.info('Uploading resources...')
        print('\nUploading resources...\n')

        for id, resource in RESOURCES.items():
            try:
                print('Uploading resource: {}'.format(resource))
                requests.post(
                    'http://0.0.0.0:5000/api/action/resource_update',
                    data={"id": id},
                    headers={"X-CKAN-API-Key": get_admin_api_key},
                    files=[('upload', file(
                           os.path.join(seed_resource_dir, resource)))])
            except Exception as e:
                log.info('Error uploading {}: {}'.format(resource, e))
                print('\nError uploading {}: {}'.format(resource, e))

        # BY default we don't commit after each request to Solr, as it is
        # a really heavy operation and slows things a lot

        log.info('Rebuilding search index...')
        print('\nRebuilding search index...\n')

        rebuild()
        print('\n')

        log.info('Successfully seeded the portal with test data!')
        print('Successfully seeded the portal with test data!\n')
