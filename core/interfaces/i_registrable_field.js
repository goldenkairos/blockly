/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for a Blockly field that can be registered.
 * @author samelh@google.com (Sam El-Husseini)
 */

'use strict';

goog.module('Blockly.IRegistrableField');
goog.module.declareLegacyNamespace();

const Field = goog.requireType('Blockly.Field');


/**
 * A registrable field.
 * Note: We are not using an interface here as we are interested in defining the
 * static methods of a field rather than the instance methods.
 * @typedef {{
 *     fromJson:IRegistrableField.fromJson
 * }}
 */
let IRegistrableField;

/**
 * @typedef {function(!Object): Field}
 */
IRegistrableField.fromJson;

exports = IRegistrableField;
