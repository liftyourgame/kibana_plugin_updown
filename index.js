import { resolve } from 'path';
import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      visTypes: ['plugins/kibana_plugin_updown/up_down_vis'],
//      visTypes: [up_down_vis],
      
      
/*      translations: [
        resolve(__dirname, './translations/es.json')
      ],*/
      
      
      hacks: [
        'plugins/kibana_plugin_updown/hack'
      ]
      
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    
    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }
    

  });
};
