/**
 * @title Change Nested Composition Layer Colors
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the label color of all layers in the current composition to "None." All nested
 * precomps will be affected as well (and precomps within those precomps and so on).
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function changeLayerColors(comp) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            layer.label = 0;
            if (layer.source instanceof CompItem) {
                changeLayerColors(layer.source);
            } 
        }
    }

    app.beginUndoGroup("Change Nested Composition Layer Colors");
    var comp = app.project.activeItem;
    changeLayerColors(comp);
    app.endUndoGroup();
})()