// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for aboutme documents
 */
interface AboutmeDocumentData {
  /**
   * Texto Sobre field in *aboutme*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: aboutme.texto_sobre
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  texto_sobre: prismic.RichTextField;

  /**
   * link github field in *aboutme*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: aboutme.link_github
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_github: prismic.LinkField;

  /**
   * link linkdin field in *aboutme*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: aboutme.link_linkdin
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_linkdin: prismic.LinkField;

  /**
   * academic field in *aboutme*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: aboutme.academic
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  academic: prismic.ContentRelationshipField<"academic">;

  /**
   * courses field in *aboutme*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: aboutme.courses
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  courses: prismic.ContentRelationshipField<"courses">;
}

/**
 * aboutme document from Prismic
 *
 * - **API ID**: `aboutme`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutmeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AboutmeDocumentData>,
    "aboutme",
    Lang
  >;

/**
 * Content for Academic documents
 */
interface AcademicDocumentData {
  /**
   * institution field in *Academic*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: academic.institution
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  institution: prismic.TitleField;

  /**
   * curso field in *Academic*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: academic.curso
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  curso: prismic.TitleField;

  /**
   * local field in *Academic*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: academic.local
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  local: prismic.RichTextField;

  /**
   * data field in *Academic*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: academic.data
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  data: prismic.RichTextField;

  /**
   * areas de estudo field in *Academic*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: academic.areas_de_estudo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  areas_de_estudo: prismic.RichTextField;
}

/**
 * Academic document from Prismic
 *
 * - **API ID**: `academic`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AcademicDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AcademicDocumentData>,
    "academic",
    Lang
  >;

/**
 * Content for courses documents
 */
interface CoursesDocumentData {
  /**
   * title field in *courses*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: courses.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * school field in *courses*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: courses.school
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  school: prismic.TitleField;

  /**
   * teacher field in *courses*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: courses.teacher
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  teacher: prismic.TitleField;

  /**
   * hours field in *courses*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: courses.hours
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hours: prismic.RichTextField;

  /**
   * conclusion field in *courses*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: courses.conclusion
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conclusion: prismic.RichTextField;

  /**
   * course content field in *courses*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: courses.course_content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  course_content: prismic.RichTextField;

  /**
   * certificed field in *courses*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: courses.certificed
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  certificed: prismic.LinkField;

  /**
   * certificed_image field in *courses*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: courses.certificed_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  certificed_image: prismic.ImageField<never>;
}

/**
 * courses document from Prismic
 *
 * - **API ID**: `courses`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CoursesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CoursesDocumentData>,
    "courses",
    Lang
  >;

/**
 * Content for post documents
 */
interface ExperienceDocumentData {
  /**
   * cover field in *post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.cover
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cover: prismic.ImageField<never>;

  /**
   * title field in *post*
   *
   * - **Field Type**: Title
   * - **Placeholder**: titulo da experiencia
   * - **API ID Path**: experience.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * init_date field in *post*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Data de inicio
   * - **API ID Path**: experience.init_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  init_date: prismic.DateField;

  /**
   * end_date field in *post*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Data de fim
   * - **API ID Path**: experience.end_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  end_date: prismic.DateField;

  /**
   * description field in *post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * tecnologies field in *post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Tecnologias utilizadas
   * - **API ID Path**: experience.tecnologies
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tecnologies: prismic.RichTextField;

  /**
   * link field in *post*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * post document from Prismic
 *
 * - **API ID**: `experience`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExperienceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExperienceDocumentData>,
    "experience",
    Lang
  >;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * title field in *homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * subtitle field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * link action field in *homepage*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.link_action
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_action: prismic.LinkField;

  /**
   * desktop title field in *homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.desktop_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  desktop_title: prismic.TitleField;

  /**
   * desktop content field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.desktop_content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  desktop_content: prismic.RichTextField;

  /**
   * desktop image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.desktop_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  desktop_image: prismic.ImageField<never>;

  /**
   * mobile title field in *homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.mobile_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  mobile_title: prismic.TitleField;

  /**
   * mobile content field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.mobile_content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  mobile_content: prismic.RichTextField;

  /**
   * mobile image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.mobile_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mobile_image: prismic.ImageField<never>;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes =
  | AboutmeDocument
  | AcademicDocument
  | CoursesDocument
  | ExperienceDocument
  | HomepageDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutmeDocument,
      AboutmeDocumentData,
      AcademicDocument,
      AcademicDocumentData,
      CoursesDocument,
      CoursesDocumentData,
      ExperienceDocument,
      ExperienceDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      AllDocumentTypes,
    };
  }
}
