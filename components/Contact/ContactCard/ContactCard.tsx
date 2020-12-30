type ContactCardProps = {
  className?: string;
  email?: string;
  emailHref?: string;
  phone?: string;
  fax?: string;
  id?: string;
  name: string;
  position?: string;
  imageSrc: string;
};

function ContactCard(props: ContactCardProps): JSX.Element {
  const { name, position, email, emailHref, id, className = 'bg-gray-200 dark:bg-gray-900', imageSrc, phone, fax } = props;

  let emailSplit;
  if (email) {
    emailSplit = email.split('@');
  }
  return (
    <div id={id} className={['overflow-hidden', className].join(' ')}>
      <img className="w-full pb-4 images-dark" src={imageSrc} alt={name} />
      <div className="text-center p-4">
        <h3 className="text-gray-900 tracking-tight text-lg font-medium mb-4 sm:text-xl lg:text-2xl dark:text-gray-200">{name}</h3>
        {position && <div className="text-xs">{position}</div>}
        {phone && (
          <div className="my-2">
            <a
              href={'tel:' + phone.replace(/\s/g, '')}
              className="inline-flex items-center bg-transparent text-secondary dark:text-secondary-dark text-sm lowercase py-2 px-4 rounded transition ease-in-out duration-150 button-link w-full justify-center hover:bg-secondary dark:hover:bg-secondary-dark hover:bg-opacity-15"
            >
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{phone}</span>
            </a>
          </div>
        )}
        {fax && (
          <div className="my-2">
            <a
              href={'tel:' + fax.replace(/\s/g, '')}
              className="inline-flex items-center bg-transparent text-secondary dark:text-secondary-dark text-sm lowercase py-2 px-4 rounded transition ease-in-out duration-150 button-link w-full justify-center hover:bg-secondary dark:hover:bg-secondary-dark hover:bg-opacity-15"
            >
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
              </svg>
              <span>{fax}</span>
            </a>
          </div>
        )}
        {emailSplit && (
          <div className="my-2">
            <a
              href={emailHref}
              className="inline-flex items-center bg-transparent text-secondary dark:text-secondary-dark text-sm lowercase py-2 px-4 rounded transition ease-in-out duration-150 button-link w-full justify-center hover:bg-secondary dark:hover:bg-secondary-dark hover:bg-opacity-15"
              rel="nofollow"
            >
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>
                {emailSplit[0]}
                <span className="hidden">buero</span>@{emailSplit[1]}
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
export default ContactCard;
