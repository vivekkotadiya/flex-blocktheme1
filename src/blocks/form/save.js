/**
 * External Dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

export default function edit({ attributes }) {
  const { clientid, anchor } = attributes;

  return (
    <form
      id={anchor ? anchor : null}
      className={classnames("form form--contact")}
      method="post"
      novalidate>
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
          zweckgebunden zur Bearbeitung und Beantwortung meiner Anfrage benutzt.
          Mit dem Absenden des Kontaktformulars erkläre ich mich mit der
          Verarbeitung einverstanden.
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
  );
}
