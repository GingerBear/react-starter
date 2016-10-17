import React, { Component } from 'react';

class BazaarVoiceScript extends Component {
  constructor(props) {
    super(props);

    var bvapiUrl = window.location.protocol +
      `//display.ugc.bazaarvoice.com/bvstaging/static/${props.bvId}/en_US/bvapi.js`;

    function getScript(url, callback) {
      var head = document.getElementsByTagName("head")[0] ||
        document.documentElement,
        script = document.createElement("script");
      script.src = url;
      script.type = "text/javascript";
      script.charset = "utf-8";
      script.setAttribute("async", "async");
      script.onload = script.onreadystatechange = function () {
        if (!this.readyState || this.readyState === "loaded" ||
          this.readyState === "complete") {
          script.onload = script.onreadystatechange = null;
          callback();
        }
      };
      head.insertBefore(script, head.firstChild);
    }

    // work around Firefox 3.0, 3.5 lack of document.readyState
    // property.
    // Note: Because of this workaround, the <script> fragment must
    // be included within the <head> or <div> element so that it
    // executes before the window load event is fired.

    var docReady, onDocReady = function () { docReady = true; };
    if (document.readyState === undefined && document.addEventListener) {
      document.addEventListener("DOMContentLoaded", onDocReady,
        false);
      window.addEventListener("load", onDocReady, false);
    }

    function loadBazaarvoiceApi(callback) {
      if (window.$BV) {
        callback();
      } else {
        getScript(bvapiUrl, function () {
          if (docReady) {
            window.$BV.docReady();
          }
          callback();
        });
      }
    };

    loadBazaarvoiceApi(function () {
      window.$BV.ui('rr', 'inline_ratings', {
        productIds: props.productIds,
        containerPrefix: 'BVRRInlineRating'
      });
    })
  }

  render() {
    return <script></script>;
  }
}

export default BazaarVoiceScript;
