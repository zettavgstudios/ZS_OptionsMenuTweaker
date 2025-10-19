/*:
 * @plugindesc Allows you to enable or disable specific options in the settings menu, including options from other plugins.
 * @author viz
 *
 * @param DefaultOptionsCategory
 * @text Default RMMV Options
 * @type category
 * 
 * @param RemoveCommandRemember
 * @text Remove "Remember Command"
 * @type boolean
 * @default false
 * @parent DefaultOptionsCategory
 *
 * @param RemoveAlwaysDash
 * @text Remove "Always Dash"
 * @type boolean
 * @default false
 * @parent DefaultOptionsCategory
 *
 * @param RemoveBgmVolume
 * @text Remove "BGM Volume"
 * @type boolean
 * @default false
 * @parent DefaultOptionsCategory
 *
 * @param RemoveBgsVolume
 * @text Remove "BGS Volume"
 * @type boolean
 * @default false
 * @parent DefaultOptionsCategory
 *
 * @param RemoveMeVolume
 * @text Remove "ME Volume"
 * @type boolean
 * @default false
 * @parent DefaultOptionsCategory
 *
 * @param RemoveSeVolume
 * @text Remove "SE Volume"
 * @type boolean
 * @default false
 * @parent DefaultOptionsCategory
 *
 * @param PluginOptionsCategory
 * @text Plugin Option Identifiers
 * @type category
 *
 * @param CustomOption1Identifier
 * @text Option 1 Identifier
 * @type string
 * @desc Identifier of the first custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption2Identifier
 * @text Option 2 Identifier
 * @type string
 * @desc Identifier of the second custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption3Identifier
 * @text Option 3 Identifier
 * @type string
 * @desc Identifier of the third custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption4Identifier
 * @text Option 4 Identifier
 * @type string
 * @desc Identifier of the fourth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption5Identifier
 * @text Option 5 Identifier
 * @type string
 * @desc Identifier of the fifth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption6Identifier
 * @text Option 6 Identifier
 * @type string
 * @desc Identifier of the sixth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption7Identifier
 * @text Option 7 Identifier
 * @type string
 * @desc Identifier of the seventh custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption8Identifier
 * @text Option 8 Identifier
 * @type string
 * @desc Identifier of the eighth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption9Identifier
 * @text Option 9 Identifier
 * @type string
 * @desc Identifier of the ninth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption10Identifier
 * @text Option 10 Identifier
 * @type string
 * @desc Identifier of the tenth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption11Identifier
 * @text Option 11 Identifier
 * @type string
 * @desc Identifier of the eleventh custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption12Identifier
 * @text Option 12 Identifier
 * @type string
 * @desc Identifier of the twelfth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption13Identifier
 * @text Option 13 Identifier
 * @type string
 * @desc Identifier of the thirteenth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption14Identifier
 * @text Option 14 Identifier
 * @type string
 * @desc Identifier of the fourteenth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param CustomOption15Identifier
 * @text Option 15 Identifier
 * @type string
 * @desc Identifier of the fifteenth custom option to remove.
 * @default 
 * @parent PluginOptionsCategory
 *
 * @param RemoveCustomOptionCategory
 * @text Remove Custom Plugin Options
 * @type category
 *
 * @param RemoveCustomOption1
 * @text Remove Option 1
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption2
 * @text Remove Option 2
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption3
 * @text Remove Option 3
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption4
 * @text Remove Option 4
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption5
 * @text Remove Option 5
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption6
 * @text Remove Option 6
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption7
 * @text Remove Option 7
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption8
 * @text Remove Option 8
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption9
 * @text Remove Option 9
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption10
 * @text Remove Option 10
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption11
 * @text Remove Option 11
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption12
 * @text Remove Option 12
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption13
 * @text Remove Option 13
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption14
 * @text Remove Option 14
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @param RemoveCustomOption15
 * @text Remove Option 15
 * @type boolean
 * @default false
 * @parent RemoveCustomOptionCategory
 *
 * @help
 * ============================================================================
 * ZS_OptionsMenuTweaker v1.0
 * ============================================================================
 * Author: viz (Zetta Studios)
 * License: MIT (Credit Required)
 * GitHub: https://github.com/zettavgstudios
 * ============================================================================
 * 
 * This plugin allows developers to enable or disable specific options in the 
 * RPG Maker MV settings menu, including options from other plugins.
 * 
 * ============================================================================
 * ▶ Features:
 * ============================================================================
 * - Remove built-in RPG Maker MV options such as "Remember Command" and "Always Dash".
 * - Disable audio volume options (BGM, BGS, ME, SE).
 * - Hide up to 15 custom plugin options by specifying their exact identifiers.
 * - Simple configuration through the Plugin Manager.
 * 
 * ============================================================================
 * ▶ How to Use:
 * ============================================================================
 *    - Enable or disable RPG Maker MV's default options.
 *    - Add the exact identifiers of custom options from other plugins.
 * 
 * ============================================================================
 * ▶ License:
 * ============================================================================
 * This plugin is released under the MIT License. You are free to use it in 
 * commercial and non-commercial projects, modify it, and redistribute it. 
 * However, you must provide credit to the author (viz or Zetta Studios).
 * 
 * ============================================================================
 * ▶ Compatibility:
 * ============================================================================
 * - Tested only on RPG Maker MV.
 * - Should work with any plugin that properly registers options in the menu.
 * - If you encounter compatibility issues, report them on GitHub.
 * 
 * ============================================================================
 * ▶ Support:
 * ============================================================================
 * For bug reports, suggestions, or updates, visit:
 * GitHub: https://github.com/zettavgstudios
 * 
 * ============================================================================
 */

(function() {
    var pluginName = document.currentScript.src.match(/([^/]+)\.js$/)[1];
    var parameters = PluginManager.parameters(pluginName);
    var removeCommandRemember = parameters['RemoveCommandRemember'] === 'true';
    var removeAlwaysDash = parameters['RemoveAlwaysDash'] === 'true';
    var removeBgmVolume = parameters['RemoveBgmVolume'] === 'true';
    var removeBgsVolume = parameters['RemoveBgsVolume'] === 'true';
    var removeMeVolume = parameters['RemoveMeVolume'] === 'true';
    var removeSeVolume = parameters['RemoveSeVolume'] === 'true';

    var customOptions = [];
    for (var i = 1; i <= 15; i++) {
        customOptions.push({
            identifier: parameters['CustomOption' + i + 'Identifier'],
            remove: parameters['RemoveCustomOption' + i] === 'true'
        });
    }

    var _Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;
    Window_Options.prototype.makeCommandList = function() {
        _Window_Options_makeCommandList.call(this);
        
        if (removeCommandRemember) {
            this._list = this._list.filter(item => item.symbol !== 'commandRemember');
        }
        if (removeAlwaysDash) {
            this._list = this._list.filter(item => item.symbol !== 'alwaysDash');
        }
        if (removeBgmVolume) {
            this._list = this._list.filter(item => item.symbol !== 'bgmVolume');
        }
        if (removeBgsVolume) {
            this._list = this._list.filter(item => item.symbol !== 'bgsVolume');
        }
        if (removeMeVolume) {
            this._list = this._list.filter(item => item.symbol !== 'meVolume');
        }
        if (removeSeVolume) {
            this._list = this._list.filter(item => item.symbol !== 'seVolume');
        }

        customOptions.forEach(function(option) {
            if (option.remove && option.identifier) {
                this._list = this._list.filter(item => item.symbol !== option.identifier);
            }
        }, this);
    };
})();
