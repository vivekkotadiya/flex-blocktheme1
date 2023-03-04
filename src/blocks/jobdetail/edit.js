/**
 * External Dependencies
 */
import classnames from "classnames";


/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {useBlockProps, InspectorControls, store as blockEditorStore, } from "@wordpress/block-editor";
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	ToggleControl,
  } from "@wordpress/components";

/**
 * Internal dependencies
 */
import smtLogo from "../../assets/images/smtLogo.svg";
import smtLogoDark from "../../assets/images/SMTLogo-dark.svg";
import usePostTerms from '../../utils/use-post-terms';

function getMediaSourceUrlBySizeSlug( media, slug ) {
	return (
		media?.media_details?.sizes?.[ slug ]?.source_url || media?.source_url
	);
}

export default function edit({ attributes, setAttributes, context: { postId, postType: postTypeSlug, queryId },}) {
 
  	const [ fullTitle ] = useEntityProp('postType',postTypeSlug,'title',postId);
  	const [ meta ] = useEntityProp('postType', postTypeSlug, 'meta');
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

	const { postTerms:locationTerms } = usePostTerms( {
		postId,
		term: {slug :  "location"},
	});

	const { postTerms:contractTerms } = usePostTerms( {
		postId,
		term: {slug :  "contract"},
	});

	const { postTerms:subjectTerms } = usePostTerms( {
		postId,
		term: {slug :  "subject"},
	});

	const { showLogo, LogoColor } = attributes;
	const logoclass = showLogo ? `section--logo` : "";
	let xlImage, mdImage, xsImage, xlwebpImage, mdwebpImage, xswebpImage, backgroundAlt, subTitle, job_id, job_content = ''

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

	if(meta){
		subTitle = 	meta?.job_subtitle;
		job_id = meta?.job_id;
		job_content = meta?.job_content
	}

	// const LocationTermsItems = () => {
	// 	let locationTermsItems = [];
			
	// 	} 
	// }
	let locationTermsItems, contractTermsItems, subjectTermsItems = []
	if(locationTerms && locationTerms.length > 0){
		locationTermsItems = locationTerms.map((item) => {
			return item.name;
		});	
	}
	if(contractTerms && contractTerms.length > 0){
		contractTermsItems = contractTerms.map((item) => {
		   return item.name;
	   });	
   }
   if(subjectTerms && subjectTerms.length > 0){
		subjectTermsItems = subjectTerms.map((item) => {
			return item.name;
		});	
	}

  return (
	<div {...useBlockProps()}>
		<InspectorControls>
			<PanelBody
			title={__("Logo Settings", "smt-theme")}
			initialOpen={true}>
			<ToggleControl
				label={__(
				"Show/Hide the Logo in the left top cornor",
				"smt-theme"
				)}
				checked={showLogo}
				onChange={() =>
				setAttributes({
					showLogo: !showLogo,
				})
				}
			/>
			<ToggleGroupControl
				label={__("Logo Color", "smt-theme")}
				className="block-togglegroup"
				value={LogoColor}
				isBlock
				onChange={(value) => {
				setAttributes({
					LogoColor: value,
				});
				}}>
				<ToggleGroupControlOption
				value="light"
				label={__("Light", "smt-theme")}
				showTooltip={true}
				aria-label={__("Light", "smt-theme")}
				/>
				<ToggleGroupControlOption
				value="dark"
				label="Dark"
				showTooltip={true}
				aria-label="Dark"
				/>
			</ToggleGroupControl>
			</PanelBody>
		</InspectorControls>
		<section className={classnames(`section section--hero-job`, `${logoclass}`)}>
			{(xlImage || mdImage || xsImage) && (
				<div className="section__background">
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
			{ showLogo == true && (
				<a
				href="/"
				className={`section__logo section__logo--${LogoColor}`}
				onClick={(e) => e.preventDefault()}>
				{LogoColor == "light" ? (
					<img
					src={smtLogo}
					alt="SMT - School of Management and Technology"
					/>
				) : (
					<img
					src={smtLogoDark}
					alt="SMT - School of Management and Technology"
					/>
				)}
				</a>
			)}

			<div className="section__content">
				<div className="row-wrapper">
					<div className="row row-wrapper--ct-wd row--heading">
						<div className="col col--xs-12 col--lg-6">
							<div className="col-content">
								{ fullTitle && <h1 className="headline headline--style-six headline--color-one">{fullTitle}</h1> }
								{ subTitle && <h2 className="headline headline--style-three headline--color-one">{subTitle}</h2> }
							</div>
						</div>
					</div>
					<div className="row row-wrapper--ct-wd">
						<div className="col col--xs-12">
							<div className="col-content">
								<div className="job__inner">
									<p className="headline headline--align-xs-left headline--style-four headline--color-one">kurzinfos</p>
									<div className="job--info">
										<ul>
											{locationTermsItems && locationTermsItems.length > 0 &&
												<li>
													<span>Standort</span>
													<span>
														{ locationTermsItems.join(", ")}	
													</span>
												</li>
											}
											{ contractTermsItems && contractTermsItems.length > 0 &&
												<li>
													<span>Vertragsart</span>
													<span>
														{ contractTermsItems.join(", ") }	
													</span>
												</li>
											}
											{ job_content && 
												<li>
													<span>Inhalt</span>
													<span>{job_content}</span>
												</li>
											}
											
										</ul>
										<ul>
											{ subjectTermsItems && subjectTermsItems.length > 0 &&
													<li>
														<span>Fachbereich</span>
														<span>
															{ subjectTermsItems.join(", ") }	
														</span>
													</li>
												}
												{ job_id && 
													<li>
														<span>Job-ID</span>
														<span>{job_id}</span>
												</li>
											}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	

		</section>
	</div>
  );
}
