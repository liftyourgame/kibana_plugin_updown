import uiModules from 'ui/modules';
import AggResponseTabifyTabifyProvider from 'ui/agg_response/tabify/tabify';
import errors from 'ui/errors'; 

// get the kibana/table_vis module, and make sure that it requires the "kibana" module if it didn't already
const module = uiModules.get('kibana/up_down_vis', ['kibana']);

module.controller('KbnUpDownVisController', function($scope, $element, Private){

    var tabifyAggResponse = Private(require('ui/agg_response/tabify/tabify'));


    var metrics = $scope.metrics = [];

    $scope.processTableGroups = function (tableGroups) {
      console.log('---------------');
      console.log(tableGroups);
      tableGroups.tables.forEach(function (table) {
        table.rows.forEach(function (row, i) {
            let host = row[0].replace('www.', '').replace('.com', '');
            let status = row[1] == 200;
          metrics.push(
             { host: host, status: status }
          );
        });
      });
    };

    $scope.$watch('esResponse', function (resp) {
      if (resp) {
        metrics.length = 0;
        $scope.processTableGroups(tabifyAggResponse($scope.vis, resp));
      }
    });

});

