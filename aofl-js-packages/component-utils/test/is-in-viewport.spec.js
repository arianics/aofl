/* eslint no-invalid-this: "off" */
import isInViewport from '../src/is-in-viewport';
import {html} from '@polymer/lit-element';
import {render} from 'lit-html';

describe('@aofl/component-utils/src/is-in-viewport', function() {
  before(function() {
    this.testContainer = getTestContainer();
  });

  beforeEach(function() {
    render(html`
      <test-fixture id="InInViewportVisibleOnLoad">
        <template>
          <div style="position: absolute; left: 0; top: 0; width: 100px; height: 100px; background: red;"></div>
        </template>
      </test-fixture>
    `, this.testContainer);
    this.element = fixture('InInViewportVisibleOnLoad');
  });

  afterEach(function() {
    this.element.style.left = '0';
    this.element.style.top = '0';
  });

  // after(function() {
  //   this.testContainer.parentNode.removeChild(this.testContainer);
  // });

  it('should return true when element is in within the viewport', function() {
    const isVisible = isInViewport(this.element);
    expect(isVisible).to.be.true;
  });

  it('should return false when element is outside of viewport along the x axis', function() {
    this.element.style.left = '-100000px';

    const isVisible = isInViewport(this.element);
    expect(isVisible).to.be.false;
  });

  it('should return false when element is outside of viewport along the y axis', function() {
    this.element.style.top = '-100000px';
    const isVisible = isInViewport(this.element);
    expect(isVisible).to.be.false;
  });

  it('should return false when element is outside of viewport along both x and y axis', function() {
    this.element.style.top = '-100000px';
    this.element.style.left = '-100000px';
    const isVisible = isInViewport(this.element);
    expect(isVisible).to.be.false;
  });
});
