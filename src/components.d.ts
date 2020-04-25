/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppRoom {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface ControlMic {
        "on": boolean;
    }
    interface ControlVolume {
        "on": boolean;
    }
    interface InputTypewriter {
        "placeholder": string;
    }
    interface RoomTimer {
        "startTime": number;
    }
    interface UserBubble {
        "isMute": boolean;
        "isNameEditable": boolean;
        "isPlayAudioStream": boolean;
        "stream": MediaStream;
        "userName": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRoomElement extends Components.AppRoom, HTMLStencilElement {
    }
    var HTMLAppRoomElement: {
        prototype: HTMLAppRoomElement;
        new (): HTMLAppRoomElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLControlMicElement extends Components.ControlMic, HTMLStencilElement {
    }
    var HTMLControlMicElement: {
        prototype: HTMLControlMicElement;
        new (): HTMLControlMicElement;
    };
    interface HTMLControlVolumeElement extends Components.ControlVolume, HTMLStencilElement {
    }
    var HTMLControlVolumeElement: {
        prototype: HTMLControlVolumeElement;
        new (): HTMLControlVolumeElement;
    };
    interface HTMLInputTypewriterElement extends Components.InputTypewriter, HTMLStencilElement {
    }
    var HTMLInputTypewriterElement: {
        prototype: HTMLInputTypewriterElement;
        new (): HTMLInputTypewriterElement;
    };
    interface HTMLRoomTimerElement extends Components.RoomTimer, HTMLStencilElement {
    }
    var HTMLRoomTimerElement: {
        prototype: HTMLRoomTimerElement;
        new (): HTMLRoomTimerElement;
    };
    interface HTMLUserBubbleElement extends Components.UserBubble, HTMLStencilElement {
    }
    var HTMLUserBubbleElement: {
        prototype: HTMLUserBubbleElement;
        new (): HTMLUserBubbleElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-room": HTMLAppRoomElement;
        "app-root": HTMLAppRootElement;
        "control-mic": HTMLControlMicElement;
        "control-volume": HTMLControlVolumeElement;
        "input-typewriter": HTMLInputTypewriterElement;
        "room-timer": HTMLRoomTimerElement;
        "user-bubble": HTMLUserBubbleElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRoom {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface ControlMic {
        "on"?: boolean;
        "onSwitchChange"?: (event: CustomEvent<any>) => void;
    }
    interface ControlVolume {
        "on"?: boolean;
        "onSwitchChange"?: (event: CustomEvent<any>) => void;
    }
    interface InputTypewriter {
        "onInputChange"?: (event: CustomEvent<any>) => void;
        "onInputEnterKeyPress"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
    }
    interface RoomTimer {
        "startTime"?: number;
    }
    interface UserBubble {
        "isMute"?: boolean;
        "isNameEditable"?: boolean;
        "isPlayAudioStream"?: boolean;
        "onUserNameChange"?: (event: CustomEvent<any>) => void;
        "stream"?: MediaStream;
        "userName"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-room": AppRoom;
        "app-root": AppRoot;
        "control-mic": ControlMic;
        "control-volume": ControlVolume;
        "input-typewriter": InputTypewriter;
        "room-timer": RoomTimer;
        "user-bubble": UserBubble;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-room": LocalJSX.AppRoom & JSXBase.HTMLAttributes<HTMLAppRoomElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "control-mic": LocalJSX.ControlMic & JSXBase.HTMLAttributes<HTMLControlMicElement>;
            "control-volume": LocalJSX.ControlVolume & JSXBase.HTMLAttributes<HTMLControlVolumeElement>;
            "input-typewriter": LocalJSX.InputTypewriter & JSXBase.HTMLAttributes<HTMLInputTypewriterElement>;
            "room-timer": LocalJSX.RoomTimer & JSXBase.HTMLAttributes<HTMLRoomTimerElement>;
            "user-bubble": LocalJSX.UserBubble & JSXBase.HTMLAttributes<HTMLUserBubbleElement>;
        }
    }
}
