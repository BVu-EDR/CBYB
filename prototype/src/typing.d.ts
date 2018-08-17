import * as L from 'leaflet';

declare module 'leaflet' {
  namespace control {
    function fullscreen(v: any);
  }

  namespace Map {
    export interface MapOptions {
      measureControl?: boolean;
    }
  }

  export interface ControlStatic {
    Measure: Control.MeasureStatic;
  }

  namespace Control {
    export interface MeasureStatic {
      new(options?: IMeasureConstructorOptions): Measure;
    }

    export interface IMeasureConstructorOptions {
      position?: string;
      parentContainerSelector?: string;
      primaryLengthUnit?: string;
      secondaryLengthUnit?: string;
      secondaryAreaUnit?: string;
      primaryAreaUnit?: string;
      activeColor?: string;
      completedColor?: string;
      popupOptions?: IMeasurePopupOptionsOptions;
      captureZIndex?: number;
      localization?: string;
      decPoint?: string;
      thousandsSep?: string;
    }

    export interface IMeasurePopupOptionsOptions {
      className?: string;
      autoPanPadding?: Array<number>;
    }

    export interface Measure extends L.Control {
    }
  }

  export namespace control {
    export function measure(options?: Control.IMeasureConstructorOptions): Control.Measure;
  }
}
