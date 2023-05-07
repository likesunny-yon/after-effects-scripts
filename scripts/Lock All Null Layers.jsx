/**
 * @title Lock All Null Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Lock all layers in a composition that are a null layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
	app.beginUndoGroup("Lock All Null Layers")
	var comp = app.project.activeItem;
	var layers = comp.layers;
	var numLayers = layers.length;
	for (var l = 1; l <= numLayers; l++) {
		var layer = layers[l];
		if (layer.nullLayer === true) {
			layer.locked = true;
		}
	}
	app.endUndoGroup()
})()