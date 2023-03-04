/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {useBlockProps } from "@wordpress/block-editor";
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { dateI18n, getSettings as getDateSettings } from '@wordpress/date';

/**
 * Internal dependencies
 */
import smtLogo from "../../assets/images/smtLogo.svg";
import smtheroshape from "../../assets/images/smt-hero-shape.svg";
import smtheroshapemd from "../../assets/images/smt-hero-shape-md.svg";
import smtheroshapexs from "../../assets/images/smt-hero-shape-xs.svg";
import usePostTerms from '../../utils/use-post-terms';

export default function edit({ attributes, context: { postId, postType: postTypeSlug, queryId }, }) {

  const [ fullTitle ] = useEntityProp('postType',postTypeSlug,'title',postId);
  const [ featuredImage ] = useEntityProp('postType',postTypeSlug,'featured_media',postId);
  const { media } = useSelect(
  ( select ) => {
    const { getMedia, getPostType } = select( coreStore );
    return {
      media:
        featuredImage &&
        getMedia( featuredImage, {
          context: 'view',
        } ),
      postType: postTypeSlug && getPostType( postTypeSlug ),
    };
  },
  [ featuredImage, postTypeSlug ]
  );
  const [ date ] = useEntityProp( 'postType', postTypeSlug, 'date', postId );

  const { postTerms:blogTerms } = usePostTerms( {
    postId,
    term: {slug :  "category"},
  });

  let xlImage, mdImage, xsImage, xlwebpImage, mdwebpImage, xswebpImage, backgroundAlt, fomratedDate = ''

	if(media){
		backgroundAlt = media?.alt_text;
		if(media?.media_details?.sizes){
			const sizes = media?.media_details?.sizes;
			xlImage 	= 	sizes?.full?.source_url;
			xlwebpImage = 	sizes?.main_webp?.source_url;
			mdImage 	= 	sizes?.md?.source_url;
			mdwebpImage = 	sizes?.md_webp?.source_url;
			xsImage 	= 	sizes?.xs?.source_url;
			xswebpImage = 	sizes?.xs_webp?.source_url;
		}
	}

  let blogTermsItems = [];
	if(blogTerms && blogTerms.length > 0){
		blogTermsItems = blogTerms.map((item) => {
			return item.name;
		});	
	}

  if(date){
    fomratedDate = dateI18n( 'j M. Y', date ).toUpperCase();
  }


  return (
    <div {...useBlockProps()}>
      	<section className="section section--logo blog--hero-main">
          
              <div className="section__background">
               	<picture>
                    <source media="(min-width:1025px)" srcset={`${smtheroshape}`} />
                    <source media="(min-width:481px)" srcset={`${smtheroshapemd}`} />
                    <source media="(max-width:480px)" srcset={`${smtheroshapexs}`} />
                    <img src={`${smtheroshape}`} width="auto" height="auto" />
				        </picture>
              </div>
              <a href="/" className="section__logo section__logo--light"
                  onClick={(e) => e.preventDefault()}>
                <img  src={smtLogo} alt="SMT - School of Management and Technology" />
              </a>

                <div class="section__content">
                  <div class="row-wrapper row-wrapper--ct-wd">
                    <div class="row row--xs-middle row--gap-2">
                        <div class="col col--xs-12 col--sm-12 col--xl-5">
                            <div class="col__content">
                              { fullTitle &&
                              <h1 class="headline headline--align-xs-left headline--style-one headline--color-one">{fullTitle}</h1> }
                               <div class="tags">
                                {fomratedDate && <span>{fomratedDate}</span>}
                                { blogTermsItems.length > 0 && 
                                  blogTermsItems.map((term, i) => <span>{term}</span>)
                                }
                               </div>
                            </div>
                        </div>
                        <div class="col col--xs-12 col--sm-12 col--xl-7">
                            <div class="col__content">
                              {(xlImage || mdImage || xsImage) && (
                                  <div className="image">
                                    <picture>
                                    
                                      {xlwebpImage && (
                                      <source
                                        media="(min-width:1025px)"
                                        srcset={`${xlwebpImage}`}
                                        type="image/webp"
                                      />
                                      )}
                                      {xlImage && (
                                      <source media="(min-width:1025px)" srcset={`${xlImage}`} />
                                      )}

                                    
                                      {mdwebpImage && (
                                      <source
                                        media="(min-width:481px)"
                                        srcset={`${mdwebpImage}`}
                                        type="image/webp"
                                      />
                                      )}
                                      {mdImage && (
                                      <source media="(min-width:481px)" srcset={`${mdImage}`} />
                                      )}

                                      
                                      {xswebpImage && (
                                      <source
                                        media="(max-width:480px)"
                                        srcset={`${xswebpImage}`}
                                        type="image/webp"
                                      />
                                      )}
                                      {xsImage && (
                                      <source media="(max-width:480px)" srcset={`${xsImage}`} />
                                      )}

                                      {xlImage ? (
                                      <img
                                        src={`${xlImage}`}
                                        alt={backgroundAlt}
                                        width="auto"
                                        height="auto"
                                      />
                                      ) : !xlImage && mdImage ? (
                                      <img
                                        src={`${mdImage}`}
                                        alt={backgroundAlt}
                                        width="auto"
                                        height="auto"
                                      />
                                      ) : !xlImage && !mdImage && xsImage ? (
                                      <img
                                        src={`${xsImage}`}
                                        alt={backgroundAlt}
                                        width="auto"
                                        height="auto"
                                      />
                                      ) : (
                                      ""
                                      )}
                                    </picture>
                                  </div>
                                )}
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
        </section>
    </div>
  );
}
