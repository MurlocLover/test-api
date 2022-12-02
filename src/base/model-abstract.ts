import { ObjectMapper } from 'json-object-mapper';

export abstract class ModelAbstract {
  id?: string | number = '';
  idm?: string | number = '';
  
  public updateModel(fieldsToUpdate: Partial<ModelAbstract>) {
    this.setProperties(fieldsToUpdate)
    return this;
  }

  private setProperties(fieldsToUpdate: Partial<ModelAbstract>) {
    const keys = Object.keys(this);
    const keysLowerCase = keys.map(k => k.toLowerCase());
    Object
      .entries(fieldsToUpdate)
      .forEach(([key, value]) => {
        if(!!value && typeof value === 'object' && !Object.keys(this).includes(key))
          this.setProperties(value);
          keysLowerCase.includes(key.toLowerCase()) ? this[key]= value : "";
      });
  }

  public toJSON() {
    Object.keys(this).forEach((e) => {
      return ObjectMapper.serialize(this) as string;
    })
  }
}
