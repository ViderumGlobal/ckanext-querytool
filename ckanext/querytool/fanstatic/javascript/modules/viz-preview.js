/*

This modules handles displaying a visualization item

Options:
    - type (Type of the visualization item: chart)
    - colors (Pattern of colors)
    - x_axis (Column name of x axis)
    - y_axis (Column name of y axis)
    - sql_string (SQL string the contains filters)
    - chart_type (What type of chart needs to be rendered)
    - title (Chart title)
    - show_legend ( Display or hide charts legend)
    - x_text_rotate ( Display text horizontal or vertical)
    - x_text_multiline ( Display the x axis text in one line or multiline)
    - tooltip_name (Title of the tooltip)
    - data_format (Charts data format e.g 2k, $2000, 2000.0, 2000.00)
    - y_tick_format (Y axis data format e.g 2k, $2000, 2000.0, 2000.00)
    - chart_padding_top (Add chart padding from the outside)
    - chart_padding_bottom (Add chart padding from the outside)
    - padding_top (Add charts padding)
    - padding_bottom (Add charts padding)
    - show_labels (Display or hide charts labels)
    - y_label (Aditional label added in y axis)
    - filter_name (The name of the chart filter)
    - filter_value (The value of the chart filter)
    - category_name (The value of the chart category)
    - data_sort (Sort data, asc or desc)

*/
'use strict';
ckan.module('querytool-viz-preview', function() {
    var api = {
        get: function(action, params) {
            var api_ver = 3;
            var base_url = ckan.sandbox().client.endpoint;
            params = $.param(params);
            var url = base_url + '/api/' + api_ver + '/action/' + action + '?' + params;
            return $.getJSON(url);
        },
        post: function(action, data) {
            var api_ver = 3;
            var base_url = ckan.sandbox().client.endpoint;
            var url = base_url + '/api/' + api_ver + '/action/' + action;
            return $.post(url, JSON.stringify(data), 'json');
        }
    };

    return {
        initialize: function() {
            var newSql = this.create_sql();

            this.get_resource_datа(newSql);

            var chartField = this.el.closest('.chart_field');

            // The Update chart button is only in the admin area. In the public
            // updating of viz items will be applied with a reload of the page.
            if (chartField.length > 0) {
                var updateBtn = chartField.find('.update-chart-btn');
                var deleteBtn = chartField.find('.delete-chart-btn');

                updateBtn.click(this.updateChart.bind(this));
                deleteBtn.click(this.deleteChart.bind(this));
            }

            this.sandbox.subscribe('querytool:updateCharts', this.updateChart.bind(this));
        },
        // Enhance the SQL query with grouping and only select 2 columns.
        create_sql: function() {
            var parsedSqlString = this.options.sql_string.split('*');
            var sqlStringExceptSelect = parsedSqlString[1];
            var chart_filter_name = (this.options.filter_name === true) ? '' : this.options.filter_name;
            var chart_filter_value = (this.options.filter_value === true) ? '' : this.options.filter_value;

            // If additional chart filter is set extend the current sql with the new filter
            if (chart_filter_name && chart_filter_value) {
                var filterSql = ' AND ("' + this.options.filter_name + '"' + " = '" + this.options.filter_value + "')"
                sqlStringExceptSelect = sqlStringExceptSelect + filterSql;
            }
            var sql = 'SELECT ' + '"' + this.options.x_axis + '", SUM("' + this.options.y_axis + '") as ' + '"' + this.options.y_axis + '"' + sqlStringExceptSelect + ' GROUP BY "' + this.options.x_axis + '"';

            return sql;
        },
        // Get the data from Datastore.
        get_resource_datа: function(sql) {

            var category = (this.options.category_name === true) ? '' : this.options.category_name;
            var x_axis = (this.options.x_axis === true) ? '' : this.options.x_axis;
            var y_axis = (this.options.y_axis === true) ? '' : this.options.y_axis;
            var resource_id = sql.split('FROM')[1].split('WHERE')[0].split('"')[1];
            var chart_type = this.options.chart_type;

            var chart_filter_name = (this.options.filter_name === true) ? '' : this.options.filter_name;
            var chart_filter_value = (this.options.filter_value === true) ? '' : this.options.filter_value;

            var viz_form = $('#visualizations-form');
            var f = viz_form.data('mainFilters');
            var previous_filters = (this.options.query_filters === true) ? f : this.options.query_filters;

            var chart_filter = {};

            if (chart_filter_name && chart_filter_value) {
                chart_filter = {
                    name: chart_filter_name,
                    value: chart_filter_value
                }
            }

            api.post('querytool_get_chart_data', {
                    category: category,
                    sql_string: sql,
                    resource_id: resource_id,
                    x_axis: x_axis,
                    y_axis: y_axis,
                    chart_type: chart_type,
                    previous_filters: JSON.stringify(previous_filters),
                    chart_filter: JSON.stringify(chart_filter)
                })
                .done(function(data) {
                    if (data.success) {
                        this.fetched_data = data.result;
                        this.createChart(this.fetched_data);
                    } else {
                        this.el.text(this._('Chart could not be created.'));
                    }
                }.bind(this))
                .error(function(error) {
                    this.el.text(this._('Chart could not be created.'));
                }.bind(this));
        },
        createChart: function(data) {
            var x_axis = this.options.x_axis.toLowerCase();
            var y_axis = this.options.y_axis.toLowerCase();
            var records = data;
            var show_legend = this.options.show_legend;
            var x_text_rotate = this.options.x_text_rotate;
            var x_text_multiline = this.options.x_text_multiline;
            var tooltip_name = this.options.tooltip_name;
            var data_format = this.options.data_format;
            var y_tick_format = this.options.y_tick_format;
            var chart_padding_left = (this.options.chart_padding_left === true) ? null : this.options.chart_padding_left;
            var chart_padding_bottom = (this.options.chart_padding_bottom === true) ? null : this.options.chart_padding_bottom;
            var padding_top = (this.options.padding_top === true) ? null : this.options.padding_top;
            var padding_bottom = (this.options.padding_bottom === true) ? null : this.options.padding_bottom;
            var tick_count = (this.options.tick_count === true) ? '' : this.options.tick_count;
            var show_labels = this.options.show_labels;
            var y_label = (this.options.y_label === true) ? null : this.options.y_label;
            var data_sort = this.options.data_sort;
            var measure_label = this.options.measure_label;
            var additionalCategory = (this.options.category_name === true) ? '' : this.options.category_name;

            var options = {
                bindto: this.el[0],
                color: {
                    pattern: this.options.colors.split(',')
                },
                padding: {
                    left: parseInt(chart_padding_left),
                    right: 50,
                    bottom: parseInt(chart_padding_bottom)
                }
            };

            var values;

            // Title
            var titleVal = (this.options.title === true) ? '' : this.options.title;
            var queryFilters = (this.options.query_filters === true) ? [] : this.options.query_filters;
            if (!queryFilters.length) queryFilters = (this.options.info_query_filters === true) ? [] : this.options.info_query_filters;
            console.log(queryFilters)
            titleVal = this.renderChartTitle(titleVal, {
              filters: queryFilters,
              measure: {name: y_axis, alias: measure_label},
            });
            options.title = {
                text: titleVal
            }

            options.legend = {
                show: show_legend
            }
            options.tooltip = {
                format: {}
            }

            var sBarOrder = data_sort;

            if((this.options.chart_type !== 'sbar' ||
               this.options.chart_type !== 'shbar') && !additionalCategory){
                    this.sortData(data_sort, records, y_axis, x_axis);
            }


            if (tooltip_name !== true && tooltip_name !== '') {
                options.tooltip.format['title'] = function(d) {
                    if (options.data.type === 'donut' || options.data.type === 'pie') {
                        return tooltip_name;
                    }
                    return tooltip_name + ' ' + d;
                }
            }
            options.tooltip.format['value'] = function(value, ratio, id) {
                var dataf = this.sortFormatData(data_format, value);
                return dataf;
            }.bind(this);

            if (this.options.chart_type === 'donut' ||
                this.options.chart_type === 'pie') {
                values = records.map(function(item) {
                    return [item[x_axis], item[y_axis]]
                });
                options.data = {
                    columns: values,
                    type: this.options.chart_type
                };
            } else if (this.options.chart_type === 'sbar' ||
                this.options.chart_type === 'shbar') {
                var horizontal = (this.options.chart_type === 'shbar') ? true : false

                var yrotate = 0;
                if (horizontal) {
                    // On horizontal bar the x axis is now actually the y axis
                    yrotate = x_text_rotate;
                }
                values = records.map(function(item) {
                    return [item[x_axis], item[y_axis]]
                });
                options.data = {
                    columns: values,
                    type: 'bar',
                    order: sBarOrder
                };
                var groups = values.map(function(item) {
                    return item[0];
                });
                options.data.groups = [groups];

                options.axis = {
                    rotated: horizontal,
                    y: {
                        tick: {
                            count: tick_count,
                            format: function(value) {
                                var dataf = this.sortFormatData(y_tick_format, value);
                                return dataf;
                            }.bind(this),
                            rotate: yrotate
                        },
                        padding: {
                            top: parseInt(padding_top),
                            bottom: parseInt(padding_bottom)
                        }
                    },
                    x: {
                        tick: {
                            rotate: x_text_rotate,
                            multiline: x_text_multiline
                        }
                    }
                }
            } else {
                var rotate = false;
                var ctype = this.options.chart_type;
                var yrotate = 0;
                if (this.options.chart_type === 'hbar') {
                    rotate = true;
                    ctype = 'bar';
                    // On horizontal bar the x axis is now actually the y axis
                    yrotate = x_text_rotate;
                }
                if (this.options.chart_type === 'bscatter') {
                    //workaround for bubble charts, scale log base 10 because of large values
                    var rs = d3.scale.log().base(10).domain([1, 1000]).range([0, 10]);
                    ctype = 'scatter';
                    options.point = {
                        r: function(d) {
                            var num = d.value;
                            return rs(num)
                        },
                        sensitivity: 100,
                        focus: {
                            expand: {
                                enabled: true
                            }
                        }
                    };
                }

                var columns = [];

                if (additionalCategory) {

                    var orderedRecords = {};
                    Object.keys(records).sort().forEach(function(key) {
                        orderedRecords[key] = records[key];
                    });

                    for (var key in orderedRecords) {
                        columns.push(orderedRecords[key]);;
                    }

                    options.data = {
                        x: 'x',
                        columns: columns,
                        type: ctype,
                        labels: show_labels
                    };
                } else {
                    columns = records.map(function(item) {
                        return Number(item[y_axis]);
                    });

                    var categories = records.map(function(item) {
                        return item[x_axis];
                    });

                    columns.unshift(this.options.x_axis);

                    options.data = {
                        columns: [columns],
                        type: ctype,
                        labels: show_labels
                    };

                }

                if (show_labels) {
                    options.data['labels'] = {
                        format: function(value) {
                            var dataf = this.sortFormatData(data_format, value);
                            return dataf;
                        }.bind(this),
                    }
                }

                options.axis = {
                    y: {
                        tick: {
                            count: tick_count,
                            format: function(value) {
                                var dataf = this.sortFormatData(y_tick_format, value);
                                return dataf;
                            }.bind(this),
                            rotate: yrotate
                        },
                        padding: {
                            top: parseInt(padding_top),
                            bottom: parseInt(padding_bottom)
                        },
                        label: {
                          text: y_label || measure_label || '',
                          position: 'outer-middle',
                        }
                    },
                    x: {
                        type: 'category',
                        categories: categories,
                        tick: {
                            rotate: x_text_rotate,
                            multiline: x_text_multiline,
                            fit: true
                        }
                    },
                    rotated: rotate,
                };

                options.point = {
                  r: 3,
                }
            }
            var chart = c3.generate(options);
        },
        // Get the values from dropdowns and rerender the chart.
        updateChart: function() {
            var chartField = this.el.closest('.chart_field');

            var chartTypeSelect = chartField.find('[name*=chart_field_graph_]');
            var chartTypeValue = chartTypeSelect.val();

            var colorSelect = chartField.find('[name*=chart_field_color_]');
            var colorValue = colorSelect.val();

            var chartPaddingLeft = chartField.find('input[name*=chart_field_chart_padding_left_]');
            var chartPaddingLeftVal = chartPaddingLeft.val();

            var chartPaddingBottom = chartField.find('input[name*=chart_field_chart_padding_bottom_]');
            var chartPaddingBottomVal = chartPaddingBottom.val();

            var axisXSelect = chartField.find('[name*=chart_field_axis_x_]');
            var axisXValue = axisXSelect.val();

            var axisYSelect = chartField.find('[name*=chart_field_axis_y_]');
            var axisYValue = axisYSelect.val();

            var chartTitle = chartField.find('input[name*=chart_field_title_]');
            var chartTitleVal = chartTitle.val();

            var legend = chartField.find('input[name*=chart_field_legend_]');
            var legendVal = legend.is(':checked');

            var xTextRotate = chartField.find('[name*=chart_field_x_text_rotate_]');
            var xTextRotateVal = xTextRotate.val();

            var xTextMultiline = chartField.find('[name*=chart_field_x_text_multiline_]');
            var xTextMultilineVal = xTextMultiline.is(':checked');

            var tooltipName = chartField.find('input[name*=chart_field_tooltip_name_]');
            var tooltipNameVal = tooltipName.val();

            var dataFormat = chartField.find('[name*=chart_field_data_format_]');
            var dataFormatVal = dataFormat.val();

            var yTickFormat = chartField.find('[name*=chart_field_y_ticks_format_]');
            var yTickFormatVal = yTickFormat.val();

            var paddingTop = chartField.find('input[name*=chart_field_padding_top_]');
            var paddingTopVal = paddingTop.val();

            var paddingBottom = chartField.find('input[name*=chart_field_padding_bottom_]');
            var paddingBottomVal = paddingBottom.val();

            var tickCount = chartField.find('input[name*=chart_field_tick_count_]');
            var tickCountVal = tickCount.val();

            var filterName = chartField.find('[name*=chart_field_filter_name_]');
            var filterNameVal = filterName.val();

            var filterValue = chartField.find('[name*=chart_field_filter_value_]');
            var filterValueVal = filterValue.val();

            var categoryName = chartField.find('[name*=chart_field_category_name_]');
            var categoryNameVal = categoryName.val();

            var sortOpt = chartField.find('[name*=chart_field_sort_]');
            var sortVal = sortOpt.val();

            var dataLabels = chartField.find('input[name*=chart_field_labels_]');
            var dataLabelsVal = dataLabels.is(':checked');

            var yLabbel = chartField.find('input[name*=chart_field_y_label_]');
            var yLabbelVal = yLabbel.val();

            // If the changed values from the dropdowns are not from x_axis or y_axis
            // then just update the chart without fetching new data. This leads
            // to a better UX.
            if (this.fetched_data && (this.options.x_axis === axisXValue &&
                    this.options.y_axis === axisYValue) && (this.options.filter_name === filterNameVal &&
                    this.options.filter_value === filterValueVal) &&
                this.options.category_name === categoryNameVal &&
                this.options.chart_type === chartTypeValue) {
                this.options.colors = colorValue;
                this.options.chart_type = chartTypeValue;
                this.options.title = chartTitleVal;
                this.options.show_legend = legendVal;
                this.options.x_text_rotate = xTextRotateVal;
                this.options.x_text_multiline = xTextMultilineVal;
                this.options.tooltip_name = tooltipNameVal;
                this.options.data_format = dataFormatVal;
                this.options.y_tick_format = yTickFormatVal;
                this.options.chart_padding_left = chartPaddingLeftVal;
                this.options.chart_padding_bottom = chartPaddingBottomVal;
                this.options.padding_top = paddingTopVal;
                this.options.padding_bottom = paddingBottomVal;
                this.options.show_labels = dataLabelsVal;
                this.options.y_label = yLabbelVal;
                this.options.tick_count = tickCountVal;
                this.options.data_sort = sortVal;
                this.createChart(this.fetched_data);

                return;
            }

            this.options.colors = colorValue;
            this.options.chart_type = chartTypeValue;
            this.options.x_axis = axisXValue;
            this.options.y_axis = axisYValue;
            this.options.title = chartTitleVal;
            this.options.show_legend = legendVal;
            this.options.x_text_rotate = xTextRotateVal;
            this.options.x_text_multiline = xTextMultilineVal;
            this.options.tooltip_name = tooltipNameVal;
            this.options.data_format = dataFormatVal;
            this.options.y_tick_format = yTickFormatVal;
            this.options.chart_padding_left = chartPaddingLeftVal;
            this.options.chart_padding_bottom = chartPaddingBottomVal;
            this.options.padding_top = paddingTopVal;
            this.options.padding_bottom = paddingBottomVal;
            this.options.show_labels = dataLabelsVal;
            this.options.tick_count = tickCountVal;
            this.options.y_label = yLabbelVal;
            this.options.filter_name = filterNameVal;
            this.options.filter_value = filterValueVal;
            this.options.category_name = categoryNameVal;
            this.options.data_sort = sortVal;
            var newSql = this.create_sql();

            this.get_resource_datа(newSql);
        },

        // Delete the current chart
        deleteChart: function() {
            this.el.closest('.chart_field').remove();
        },

        teardown: function() {
            // We must always unsubscribe on teardown to prevent memory leaks.
            this.sandbox.unsubscribe('querytool:updateCharts', this.updateChart.bind(this));
        },

        sortData: function(data_sort, records, y_axis, x_axis) {
            if (data_sort === 'asc') {
                records.sort(function(a, b) {
                    return a[y_axis] - b[y_axis]
                });
            } else if (data_sort === 'desc') {
                records.sort(function(a, b) {
                    return a[y_axis] - b[y_axis]
                });
                records.reverse();
            } else {
                records.sort(function(a, b) {
                    var x = a[x_axis];
                    var y = b[x_axis];
                    if (!isNaN(x)) {
                        return Number(x) - Number(y);
                    } else {
                        if (x < y) //sort string ascending
                            return -1;
                        if (x > y)
                            return 1;
                        return 0; //default return value (no sorting)
                    }
                });
            }
        },

        // Format number
        sortFormatData: function(dataf, val) {
            var digits = 0;
            var format = '';
            // Currency
            if (dataf === '$') {
                // Add a coma for the thousands and limit the number of decimals to two:
                // $ 2,512.34 instead of $2512.3456
                digits = this.countDecimals(val, 2);
                format = d3.format('$,.' + digits + 'f');
            // Rounded
            } else if (dataf === 's') {
                // Limit the number of decimals to one: 2.5K instead of 2.5123456K
                val = Math.round(val*10) / 10;
                format = d3.format(dataf);
            // Others
            } else {
                format = d3.format(dataf);
            }
            return format(val);
        },

        // Count format decimals limited by "max"
        countDecimals: function (val, max) {
          return Math.min(val*10 % 1 ? 2 : val % 1 ? 1 : 0, max);
        },

        // Render dynamic chart titles
        renderChartTitle (title, options) {

          // Prepare data
          // TODO: simplify {{}} to {}?
          // TODO: fix issue with variables like "Two words"/remove "data" namespace
          var data = {measure: options.measure.alias};
          for (let filter of options.filters) data[filter.alias] = filter.value;

          // Render and return
          try {
            var template = new nunjucks.Template(title);
            return template.render({data: data});
          } catch (error) {
            return title;
          }

        },

    }
});
