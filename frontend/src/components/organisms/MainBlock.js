import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {FilterBox} from "../molecules/FilterBox";

import {GENDERS} from "../../mocks/Genders";
import {ANAMNESIS} from "../../mocks/Anamnes";

export const MainBlock = ({children}) => (
  <Layout className="page-background">
    <Layout className="page-background-overlay">
      <Layout className="container100">
        <Layout className="center-wrapper">
          <Heading level={2} className="headline-slogan mb-3">
            VÍŠ, ŽE STAČÍ TŘEBA JEN <span className={"orange-text"}>1 PREVENTIVNÍ PROHLÍDKA</span> K TOMU, ABY JSI <span className={"orange-text"}>UŠETŘIL STOVKY ZBYTEČNÝCH </span> HODIN
            U DOKTORA! <br/>TO UŽ ZA TO STOJÍ, <span className={"orange-text"}>NEMYSLÍŠ</span>?
          </Heading>
          <FilterBox
              genders={GENDERS}
              anamnesis={ANAMNESIS}
          />
        </Layout>
      </Layout>
    </Layout>
  </Layout>
);