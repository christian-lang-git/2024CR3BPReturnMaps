import React, { Component } from "react";
import { AppContext } from "@/components/uicustom/AppContext"
import Emitter from '../utility/emitter';
import * as Constants from "../utility/constants";

class InputWrapper {

    constructor(input_parameter_wrapper, ui_state_name, url_parameter_name) {
        this.input_parameter_wrapper = input_parameter_wrapper;
        this.ui_state_name = ui_state_name;
        this.url_parameter_name = url_parameter_name;

        this.addToDicts();
    }

    addToDicts() {
        console.log("add InputWrapper: ", this.ui_state_name, this.url_parameter_name)
        var exists = this.url_parameter_name in this.input_parameter_wrapper.dict_url_parameter_name_to_input_wrapper
        if (exists) {
            var wrapper = this.input_parameter_wrapper.dict_url_parameter_name_to_input_wrapper[this.url_parameter_name]
            throw new Error("Error while trying to add '" + this.ui_state_name + "' with url_parameter_name '"
                + this.url_parameter_name + "'. The url_parameter_name "
                + "already exists for wrapper: '" + wrapper.ui_state_name + "'");
        }
        var exists = this.ui_state_name in this.input_parameter_wrapper.dict_ui_state_name_to_input_wrapper
        if (exists) {
            var wrapper = this.input_parameter_wrapper.dict_ui_state_name_to_input_wrapper[this.ui_state_name]
            throw new Error("Error while trying to add '" + this.ui_state_name + "' with url_parameter_name '"
                + this.url_parameter_name + "'. The ui_state_name "
                + "already exists with url_parameter_name: '" + wrapper.url_parameter_name + "'");
        }
        this.input_parameter_wrapper.dict_url_parameter_name_to_input_wrapper[this.url_parameter_name] = this;
        this.input_parameter_wrapper.dict_ui_state_name_to_input_wrapper[this.ui_state_name] = this;
    }
}

class InputParameterWrapper extends Component{

    static contextType = AppContext;

    constructor(props) {   
        super(props);
        console.warn("CONSTRUCTOR: InputParameterWrapper");     
        this.dict_url_parameter_name_to_input_wrapper = {};
        this.dict_ui_state_name_to_input_wrapper = {};
        
        Emitter.on(Constants.EVENT_INITIALIZATION_COMPLETED, this.handleEventInitializationCompleted);
        this.waiting_for_completion = Constants.NUM_ELEMENTS_THAT_REQUIRE_INITIALIZATION;

        new InputWrapper(this, "UI_STATE_DATA_PHYSICS_MU", "mu");
        new InputWrapper(this, "UI_STATE_DATA_PHYSICS_ANGULAR_VELOCITY", "n");
        new InputWrapper(this, "UI_STATE_DATA_PHYSICS_SEED_ENERGY", "e");
        new InputWrapper(this, "UI_STATE_DATA_PHYSICS_SEED_DIRECTION_X", "dx");
        new InputWrapper(this, "UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Y", "dy");
        new InputWrapper(this, "UI_STATE_DATA_PHYSICS_SEED_DIRECTION_Z", "dz");
        new InputWrapper(this, "UI_STATE_DATA_PHYSICS_SEED_POSITION_X", "qx");
        new InputWrapper(this, "UI_STATE_DATA_PHYSICS_SEED_POSITION_Y", "qy");
        new InputWrapper(this, "UI_STATE_DATA_INTEGRATION_STEP_SIZE", "ss");
        new InputWrapper(this, "UI_STATE_DATA_INTEGRATION_MAX_STEPS", "sn");
        new InputWrapper(this, "UI_STATE_DATA_INTEGRATION_TERMINATION_METHOD", "ter");
        new InputWrapper(this, "UI_STATE_DATA_DOMAIN_MIN_X", "xmin");
        new InputWrapper(this, "UI_STATE_DATA_DOMAIN_MAX_X", "xmax");
        new InputWrapper(this, "UI_STATE_DATA_DOMAIN_PIXELS_X", "nx");
        new InputWrapper(this, "UI_STATE_DATA_DOMAIN_MIN_Y", "ymin");
        new InputWrapper(this, "UI_STATE_DATA_DOMAIN_MAX_Y", "ymax");
        new InputWrapper(this, "UI_STATE_DATA_DOMAIN_PIXELS_Y", "ny");
        new InputWrapper(this, "UI_STATE_DATA_ANGLE_PIXELS_X", "ax");
        new InputWrapper(this, "UI_STATE_DATA_ANGLE_PIXELS_Y", "ay");
        new InputWrapper(this, "UI_STATE_CAMERA_CONTROLS_ROTATESPEED", "rot");
        new InputWrapper(this, "UI_STATE_CAMERA_CONTROLS_PANSPEED", "pan");
        new InputWrapper(this, "UI_STATE_CAMERA_CONTROLS_ZOOMSPEED", "zoom");
        new InputWrapper(this, "UI_STATE_CAMERA_NEAR", "near");
        new InputWrapper(this, "UI_STATE_CAMERA_FAR", "far");
        new InputWrapper(this, "UI_STATE_RENDERING_FTLE_TYPE", "ftype");
        new InputWrapper(this, "UI_STATE_RENDERING_BODIES_MAX_RADIUS_BODIES", "radb");
        new InputWrapper(this, "UI_STATE_RENDERING_BODIES_RADIUS_CENTER_OF_MASS", "radcm");
        new InputWrapper(this, "UI_STATE_RENDERING_SCALAR_MIN", "smin");
        new InputWrapper(this, "UI_STATE_RENDERING_SCALAR_MAX", "smax");
        new InputWrapper(this, "UI_STATE_RENDERING_OPACITY", "opa");
        new InputWrapper(this, "UI_STATE_RENDERING_CLICKED_POSITION_RADIUS", "radc");
        new InputWrapper(this, "UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX", "rada");
        new InputWrapper(this, "UI_STATE_RENDERING_CLICKED_POSITION_RADIUS_AUX_SPHERE", "radas");
        new InputWrapper(this, "UI_STATE_RENDERING_TEXTURE_MODE", "tm");
        new InputWrapper(this, "UI_STATE_RENDERING_SPECIALIZED_MODE", "sm");
        new InputWrapper(this, "UI_STATE_RENDERING_RETURN_NUMBER", "rn");
        new InputWrapper(this, "UI_STATE_RENDERING_DIRECTION", "dir");
        new InputWrapper(this, "UI_STATE_RENDERING_RAW_MODE", "raw");
        new InputWrapper(this, "UI_STATE_RENDERING_RAW_MODE_LAYER", "rawl");
        new InputWrapper(this, "UI_STATE_RENDERING_RAW_MODE_X_TEXTURE_INDEX", "rawx");
        new InputWrapper(this, "UI_STATE_RENDERING_RAW_MODE_Y_TEXTURE_INDEX", "rawy");
        new InputWrapper(this, "UI_STATE_RENDERING_TUBE_SEGMENT_LENGTH", "tsl");
        new InputWrapper(this, "UI_STATE_RENDERING_TUBE_MAX_SEGMENTS", "tsn");
        new InputWrapper(this, "UI_STATE_RENDERING_TUBE_RADIUS", "tr");
        new InputWrapper(this, "UI_STATE_RENDERING_TUBE_NUM_SIDES", "tns");
        new InputWrapper(this, "UI_STATE_RENDERING_TUBE_ONLY_SHOW_SUCCESSFUL_RETURNS", "succ");
        new InputWrapper(this, "UI_STATE_ACTIVE_BEHAVIOR", "ab");
        new InputWrapper(this, "UI_STATE_LINKED_VIEWS_ACTIVE", "link");
        new InputWrapper(this, "UI_STATE_DATA_PHYSICS_USE_CONSTANT_VELOCITY", "cvel");
        new InputWrapper(this, "UI_STATE_AUX_CONTENT", "auxc");
        new InputWrapper(this, "UI_STATE_AUX_GRID_DIRECTION", "auxgd");
        new InputWrapper(this, "UI_STATE_RENDERING_SCALE_VERTICES", "scalev");
    }

    componentDidMount() {
        this.fromURL();
    }

    handleEventInitializationCompleted = () => {
        console.warn("handleEventInitializationCompleted");
        this.waiting_for_completion -= 1;
        if(this.waiting_for_completion == 0){
            console.warn("all elements initialized");
            Emitter.emit(Constants.EVENT_DATA_UPDATE, {});
        }
    }

    fromURL() {
        console.warn("fromURL:", window.location.search);
        const urlParams = new URLSearchParams(window.location.search);

        const no_search = window.location.search.length < 1;
        const complete = urlParams.has("c") || no_search;
        if(!complete){
            window.alert("Error: Incomplete URL.\nIf you clicked on a link in a PDF, try using a different PDF viewer.");
        }

        var dict = {};
        for (var key in this.dict_url_parameter_name_to_input_wrapper) {
            var input_wrapper = this.dict_url_parameter_name_to_input_wrapper[key];
            const value = urlParams.get(input_wrapper.url_parameter_name);
            console.warn("url_parameter_name:", input_wrapper.url_parameter_name, "value:", value);
            if (value === null)
                continue;
            //this.setValue(input_wrapper.ui_state_name, value);
            dict[input_wrapper.ui_state_name] = value;
        }

        this.setValues(dict);
    }

    updateURL(){        
        var query_string = this.toQueryString();
        window.history.pushState(null, null, 'index.html' + query_string);
    }

    /*
    toURL(){
        var query_string = this.toQueryString();
        var url_without_query = window.location.toString().replace(window.location.search, "");
        return url_without_query + query_string;
    }
    */

    toQueryString() {
        console.log("toURL");
        var params = {};

        for (var key in this.dict_url_parameter_name_to_input_wrapper) {
            var input_wrapper = this.dict_url_parameter_name_to_input_wrapper[key];
            console.log("key:", key);
            const value = this.getValue(input_wrapper.ui_state_name);
            console.log("url_parameter_name:", input_wrapper.url_parameter_name, "value:", value);
            if (value === null)
                continue;
            params[input_wrapper.url_parameter_name] = value;
        }
        
        var query_string = "?" + Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&')

        console.log("query_string:", query_string);
        return query_string + "&c=1";
    }   
    
    setValue(ui_state_name, value) {
        console.warn("set value of '", ui_state_name, "' to '", value, "'")
        const { setUiState } = this.context;
        setUiState({ [ui_state_name]: value });
    }

    setValues(dict) {
        console.warn("set values", dict)
        const { setUiState } = this.context;
        setUiState(dict);
    }

    getValue(ui_state_name) {
        console.warn("get value of '", ui_state_name, "'")
        const { uiState } = this.context;
        return uiState[ui_state_name];
    }

    render() {
        const { children } = this.props

        return (
            <div>
                {children}
            </div>
        )
    }
}

export { InputParameterWrapper };