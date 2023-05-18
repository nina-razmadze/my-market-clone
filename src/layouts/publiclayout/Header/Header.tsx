import { lazy } from 'react';
import { GrCart } from 'react-icons/gr';

import { FaSearch } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';

import { useState, useEffect, useRef } from 'react';
import Button from '@src/components/Button/PrimaryButton';
import { SMainContainer } from '@src/components/SMainContainer';

import {
  SListUl,
  SLogoSpan,
  SLoginButton,
  SAuthButtons,
  SdivContainer,
} from './SHeader.styled';

import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { SCartP } from './SHeader.styled';
import { SCartIcon } from './SHeader.styled';
import { SHeaderNav } from './SHeader.styled';
import { SSimplyBtn } from './SHeader.styled';
import { FormattedMessage } from 'react-intl';

import { SSearchInput } from './SHeader.styled';
import { SPrimaryButton } from './SHeader.styled';
import { STranslateSelect } from './SHeader.styled';
import { Language } from '../../../types/localstorage';

import { LocaleContext } from '@src/contexts/LocaleContext';
import GroceryCart from '.././../../images/grocery-cart.png';

export function Header() {
  const { locale, setLocale } = useContext(LocaleContext);
  return (
    <>
      <SHeaderNav>
        <SdivContainer>
          <SSearchInput placeholder='Search'></SSearchInput>

          <SAuthButtons>
            <STranslateSelect
              onChange={(e) => {
                localStorage.setItem('locale', e.target.value);
                setLocale(e.target.value as Language);
              }}
              value={locale}
            >
              <option value={Language.EN}>
                <FormattedMessage id='ENG' />
              </option>
              <option value={Language.GE}>
                <FormattedMessage id='GEO' />
              </option>
            </STranslateSelect>
            <Link to='/Cart'>
              <SSimplyBtn>
                <SCartIcon>
                  <img src={GroceryCart}></img>
                </SCartIcon>
                <SCartP>
                  <FormattedMessage id='cart' />
                </SCartP>
              </SSimplyBtn>
            </Link>

            <Link to='/auth/login'>
              <SPrimaryButton>
                <FormattedMessage id='Log in' />
              </SPrimaryButton>
            </Link>
          </SAuthButtons>
        </SdivContainer>
        <Link to='/'>
          <SLogoSpan>EShop</SLogoSpan>
        </Link>
      </SHeaderNav>
    </>
  );
}
