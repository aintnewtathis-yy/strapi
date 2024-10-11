import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsSsylka extends Schema.Component {
  collectionName: 'components_components_ssylka';
  info: {
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsSpisok extends Schema.Component {
  collectionName: 'components_components_spisok';
  info: {
    displayName: '\u0421\u043F\u0438\u0441\u043E\u043A';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ComponentsSmyslovayaEdinicza extends Schema.Component {
  collectionName: 'components_components_smyslovaya_edinicza';
  info: {
    displayName: '\u0421\u043C\u044B\u0441\u043B\u043E\u0432\u0430\u044F \u0435\u0434\u0438\u043D\u0438\u0446\u0430';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    richContent: Attribute.RichText;
  };
}

export interface ComponentsSeo extends Schema.Component {
  collectionName: 'components_components_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    slug: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentsProczessRabotyElement extends Schema.Component {
  collectionName: 'components_components_proczess_raboty_element';
  info: {
    displayName: '\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0440\u0430\u0431\u043E\u0442\u044B - \u044D\u043B\u0435\u043C\u0435\u043D\u0442';
    description: '';
  };
  attributes: {
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u041D\u0435\u0439\u043C\u0438\u043D\u0433'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430/\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0442\u0440\u0430\u043D\u0441\u043B\u0438\u0440\u0443\u0435\u0442 \u0432\u0430\u0448\u0438 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044E.'>;
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface ComponentsFooterLink extends Schema.Component {
  collectionName: 'components_components_footer_links';
  info: {
    displayName: 'footerLink';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    label: Attribute.String;
    class: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsCzitata extends Schema.Component {
  collectionName: 'components_components_czitata';
  info: {
    displayName: '\u0426\u0438\u0442\u0430\u0442\u0430';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    name: Attribute.String;
    quote: Attribute.Text;
  };
}

export interface ComponentsChlenKomandy extends Schema.Component {
  collectionName: 'components_components_chlen_komandy';
  info: {
    displayName: '\u0427\u043B\u0435\u043D \u043A\u043E\u043C\u0430\u043D\u0434\u044B';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0410\u043D\u0442\u043E\u043D \u043B\u0430\u0437\u0430\u0440\u0435\u0432'>;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ComponentsBlokSoSkrollomFoto extends Schema.Component {
  collectionName: 'components_components_blok_so_skrollom_foto';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0441\u043E \u0441\u043A\u0440\u043E\u043B\u043B\u043E\u043C \u0444\u043E\u0442\u043E';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0412\u0430\u043C \u043A\u0430\u043A \u0421\u0435\u0431\u0435 - \u043D\u0430\u0448\u0430 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F \u0438 \u043F\u043E\u0434\u0445\u043E\u0434 \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432.'>;
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface ComponentsBlokSTekstom extends Schema.Component {
  collectionName: 'components_components_blok_s_tekstom';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0441 \u0442\u0435\u043A\u0441\u0442\u043E\u043C';
    description: '';
  };
  attributes: {
    miniTitle: Attribute.String;
    contentElement: Attribute.Component<'components.smyslovaya-edinicza', true>;
    quote: Attribute.Component<'components.czitata'>;
  };
}

export interface ComponentsAkkordion extends Schema.Component {
  collectionName: 'components_components_akkordion';
  info: {
    displayName: '\u0410\u043A\u043A\u043E\u0440\u0434\u0438\u043E\u043D';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    content: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.ssylka': ComponentsSsylka;
      'components.spisok': ComponentsSpisok;
      'components.smyslovaya-edinicza': ComponentsSmyslovayaEdinicza;
      'components.seo': ComponentsSeo;
      'components.proczess-raboty-element': ComponentsProczessRabotyElement;
      'components.footer-link': ComponentsFooterLink;
      'components.czitata': ComponentsCzitata;
      'components.chlen-komandy': ComponentsChlenKomandy;
      'components.blok-so-skrollom-foto': ComponentsBlokSoSkrollomFoto;
      'components.blok-s-tekstom': ComponentsBlokSTekstom;
      'components.akkordion': ComponentsAkkordion;
    }
  }
}
