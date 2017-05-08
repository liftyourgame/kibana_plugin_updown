import 'plugins/kibana_plugin_updown/up_down_vis.less';
import 'plugins/kibana_plugin_updown/up_down_vis_controller';
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import upDownVisTemplate from 'plugins/kibana_plugin_updown/up_down_vis.html';
import upDownVisParamsTemplate from 'plugins/kibana_plugin_updown/up_down_vis_params.html';


// register the provider with the visTypes registry
require('ui/registry/vis_types').register(upDownVisProvider);


function upDownVisProvider(Private) {
    const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
    const Schemas = Private(VisSchemasProvider);

return new TemplateVisType({
  		name: 'upDown',
  		title: 'Up Down widget',
  		icon: 'fa-spinner',
  		description: 'This is Kibana 5 plugin which displays if a server is up or down.',
  		template: upDownVisTemplate,
  		params: {
  		    defaults: {
                        width: 50,
          redThreshold: 20,          
          greenThreshold: 80,
          redAndGreenOnly: false,
          invertScale: false,
          rotateHorizontaly: false

 	            },
                    editor: upDownVisParamsTemplate
	        },
            hierarchicalData: true,
//            implementsRenderComplete: true,
	    schemas: new Schemas([
            {
	        	group: 'metrics',
	          	name: 'metric',
	          	title: 'Metric',
	          	min: 1,
	          	max: 5,
//        		aggFilter: ['terms', 'significant_terms'],
              defaults: [ { type: 'count', schema: 'metric' } ],   	
            },
 {
        group: 'buckets',
        name: 'segment',
        icon: 'fa fa-cloud',
        title: 'Hosts',
        min: 1,
        max: 1,
        aggFilter: ['terms', 'significant_terms']
      }
	    ])
    });

}


export default upDownVisProvider;
