/**
 * External Dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment, useEffect, useRef } from "@wordpress/element";
import { PanelBody, TextControl } from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

export default function edit({ attributes, setAttributes, clientId }) {
  const { clientid, recipients, mailSubject, anchor } = attributes;

  const contactForm = useRef();

  useEffect(() => {
    clientid === "" && setAttributes({ clientid: clientId });
    const { ownerDocument } = contactForm.current;
    var hideFields = ownerDocument.querySelectorAll(".hide-robot");
    hideFields.forEach(function (field) {
      field.style.display = "none";
    });
  }, []);

  return (
    <div {...useBlockProps()}>
      <Fragment>
        <InspectorControls>
          <PanelBody title={"Settings"}>
            <TextControl
              label={__("Mail Recipients", "smt-theme")}
              placeholder={__(
                "Specify Email with comma seprated…",
                "smt-theme"
              )}
              type="text"
              value={recipients}
              onChange={(value) => setAttributes({ recipients: value })}
            />
            <TextControl
              label={__("Mail Subject", "smt-theme")}
              placeholder={__("Specify Mail Subject…", "smt-theme")}
              type="text"
              value={mailSubject}
              onChange={(value) => setAttributes({ mailSubject: value })}
            />
          </PanelBody>
          <PanelBody title={__("Additional", "smt-theme")} initialOpen={true}>
            <TextControl
              label={__("Anchor", "smt-theme")}
              placeholder={__("Specify Id…", "smt-theme")}
              type="text"
              value={anchor}
              onChange={(value) => setAttributes({ anchor: value })}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
      <form
        id={anchor ? anchor : null}
        className={classnames("form form--contact")}
        method="post"
        novalidate
        ref={contactForm}>
        <input type="hidden" name="clientId" value={clientid} />
        <input type="hidden" name="time" />
        <input name="con_name" type="text" id="con_name" class="hide-robot" />
        <div class="error-msg"></div>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          autocomplete="off"
          required="required"
          placeholder="Name"
        />
        <div class="error-msg"></div>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          autocomplete="off"
          required="required"
          placeholder="E-Mail-Adresse"
        />
        <div class="error-msg"></div>
        <textarea
          type="text"
          class="form-control"
          id="message"
          name="message"
          rows="7"
          placeholder="Nachricht"></textarea>
        <div class="error-msg"></div>
        <label for={__("Privacy", "smt-theme")} className="acceptance">
          <input
            type="checkbox"
            name="acceptPrivacy"
            value="1"
            required="required"
          />
          <span class="form-label">
            Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und bin
            damit einverstanden, dass die von mir angegebenen Daten elektronisch
            erhoben und gespeichert werden. Meine Daten werden dabei nur streng
            zweckgebunden zur Bearbeitung und Beantwortung meiner Anfrage
            benutzt. Mit dem Absenden des Kontaktformulars erkläre ich mich mit
            der Verarbeitung einverstanden.
          </span>
        </label>
        <label for="submit" className="submit--button">
          <input
            type="submit"
            value={__("absenden", "smt-theme")}
            class="button--cta button--style-two button--width-xs-inline button--color-six button--align-xs-left"
            name="submit"
          />
        </label>
        <div className="response">
          <p className="response-message"></p>
        </div>
      </form>
    </div>
  );
}
