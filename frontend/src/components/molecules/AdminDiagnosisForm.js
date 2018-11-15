import React, {Component} from 'react';

import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {Column} from "../atoms/Column";
import {Layout} from '../atoms/Layout';
import {InputWithLabel} from "../molecules/InputWithLabel";
import {TextareaWithLabel} from "../molecules/TextareaWithLabel";
import {Heading} from "../atoms/Heading";
import {MultiSelectWithLabel} from "./MultiSelectWithLabel";
import { Link } from '../atoms/Link';

export class AdminDiagnosisForm extends Component {
  render() {
    let {preventions} = this.props;
    return (
      <Layout className="footer pt-5">
        <Heading level={3} className={"pb-3"}>Diagnóza</Heading>
        <form>
          <Row>
            <Layout className="col-md-6">
              <InputWithLabel
                id="Název"
                label="Název diagnózy"
                placeholder="Zde uveďte název diagnózy"
              />
              <TextareaWithLabel
                id="Popis"
                label="Popis diagnózy"
                type='text'
              />
            </Layout>
            <Layout className="col-md-6">
              <MultiSelectWithLabel
                id="preventions"
                label="Výskyt prevencí"
                multi
                options={preventions.map(preventions => {
                  return {label: preventions.name, value: preventions.name}
                })}
                name="preventions"
                placeholder="Seznam prevencí"
              />
            </Layout>
            <Column xs={12}>
              <Link to="/admin">
                <Button
                title="Uložit"
                variant="danger"
                className="float-right"
                />
              </Link>
            </Column>
          </Row>
        </form>
      </Layout>


  );
 }
}