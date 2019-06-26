export default {

    data: {

        // Boolean [true] | true, false
        autoHide: true,

        // Boolean [true] | true, false
        clickToHide: true,

        // Integer [4000] | 1 - x
        hideDelay: 4000,

        // String [success] | success, info, warning, error, neutral
        type: 'success',

        // Integer [12] | 0 - x
        gap: 12,

        // String [top right] | top left, top center, top right, bottom left, bottom center, bottom right
        position: 'top right',

        // Boolean [false] | true, false
        closeButton: false,

        // Boolean [false] | true, false
        progress: false,

        // String | Boolean [false] | false, ease, shrink, push
        animation: false,

        // Function | Boolean [false] | false, function
        action: false,

        // String | Boolean [false] | false, "string"
        redirect: false,

        // String | Boolean [false] | false, "string"
        title: false,

        // String | Boolean [false] | false, "string"
        description: false,

        // String | Boolean [false] | false, "string"
        picture: false,

        // Boolean [false] | true, false
        pointerEvents: false

    },

    save(settings) {

        Object.keys(settings).forEach(param => {
            this.data[param] = settings[param];
        });

    }

};