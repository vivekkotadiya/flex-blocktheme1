import { select, useSelect } from "@wordpress/data";

const Contactcard = (props) => {
  const personName = props.personPost[0]?.title?.rendered;
  const featuredMediaId = props.personPost[0]?.featured_media;
  const departmentId = props.personPost[0].department[0];
  const teamAlt = props.personPost[0]?.metadata?.team_alt;
  const email = props.personPost[0]?.metadata?.email;
  const phone = props.personPost[0]?.metadata?.phone;
  const style = props.style;

  const image = useSelect(() => select("core").getMedia(featuredMediaId));
  const term = useSelect(() =>
    select("core").getEntityRecord("taxonomy", "department", departmentId)
  );

  const termName = term?.name;

  const Imagehtml = () => {
    if (image === undefined) {
      return <></>;
    }
    const xlimg = image?.media_details?.sizes?.xl
      ? image?.media_details?.sizes?.xl.source_url
      : image?.media_details?.sizes?.full.source_url;
    const xsimg = image?.media_details?.sizes?.xs
      ? image?.media_details?.sizes?.xs.source_url
      : null;
    const xsimgwebp = image?.media_details?.sizes?.xs_webp
      ? image?.media_details?.sizes?.xs_webp.source_url
      : null;

    return (
      <>
        {xlimg && (
          <picture>
            {xsimgwebp && <source srcset={xsimgwebp} type="image/webp" />}
            {xsimg && <source srcset={xsimg} />}
            <img
              decoding="async"
              src={xlimg}
              alt={"" != teamAlt ? teamAlt : image.alt_text}
            />
          </picture>
        )}
      </>
    );
  };

  return (
    <div className={`contact-person contact-person-${style}`}>
      <div className="contact-person__image">{image && <Imagehtml />}</div>
      <div className="contact-person__details">
        <h3 className="contact-person__name headline headline--align-xs-left headline--style-four headline--color-three">
          {personName}
        </h3>
        {termName && <p className="contact-person__department">{termName}</p>}
        {email && (
          <a
            className="contact-person__email text text--style-one text--align-xs-left text--color-seven"
            href={`mailto:${email}`}>
            {email}
          </a>
        )}
        {phone && (
          <a
            className="contact-person__phone text text--style-one text--align-xs-left text--color-seven"
            href={`tel:${phone}`}>
            {phone}
          </a>
        )}
      </div>
    </div>
  );
};

export default Contactcard;
