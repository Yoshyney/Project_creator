import Settings from "./Modules/Settings";
import Core from "./Modules/Core";

module.exports = (() => { return {

    configure(settings = {}) {
        Settings.save(settings);
    },

    prepare(settings = {}) {

        Settings.save(settings);
        Core.prepare();

    },

    success(settings = {}) {
        Core.pushNotification('success', settings);
    },

    info(settings = {}) {
        Core.pushNotification('info', settings);
    },

    warning(settings = {}) {
        Core.pushNotification('warning', settings);
    },

    error(settings = {}) {
        Core.pushNotification('error', settings);
    },

    neutral(settings = {}) {
        Core.pushNotification('neutral', settings);
    },

    create() {
        Core.pushNotification();
    }

}})();