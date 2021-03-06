import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin';

/**
 * @memberof module:aofl-js/map-state-properties-mixin-package
 * @requires polymer/dedupingMixin
 */
export default dedupingMixin((superClass) => {
  /**
   * @extends {dedupingMixin(superClass)}
   */
  class MapStatePropertiesMixin extends superClass {
    /**
     * @param {*} args
     */
    connectedCallback(...args) {
      /* istanbul ignore else */
      if (typeof this.mapStateProperties === 'function' &&
      typeof this.storeInstance !== 'undefined') {
        this.mapStateProperties();
        this.statePropertiesUnsubscribe = this.storeInstance.subscribe(() => {
          this.mapStateProperties();
        });
      }
      super.connectedCallback(...args);
    }

    /**
     * @param {*} args
     */
    disconnectedCallback(...args) {
      super.disconnectedCallback(...args);
      /* istanbul ignore else */
      if (typeof this.statePropertiesUnsubscribe === 'function') {
        this.statePropertiesUnsubscribe();
        this.statePropertiesUnsubscribe = null;
      }
    }
  }

  return MapStatePropertiesMixin;
});
