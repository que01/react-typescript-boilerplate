// Cheat the system and make this definition a "module" so 'export as' is allowed
export = {};

declare module "react" {
  export interface HTMLProps<T> extends AngularMaterial.Flexbox.Attributes {

  }

  export interface Attributes extends AngularMaterial.Flexbox.Attributes {

  }

  export interface ClassAttributes<T> extends AngularMaterial.Flexbox.Attributes {

  }
}

export as namespace React;