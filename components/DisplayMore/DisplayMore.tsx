import { useState } from 'react';

type DisplayMoreProps = {
  id?: string;
  className?: string;
};

function DisplayMore(props: React.PropsWithChildren<DisplayMoreProps>): JSX.Element {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const { className, id, children } = props;
  return (
    <div id={id} className={className}>
      {isDisplayed && <div className="text-sm lg:text-base font-light lg:font-normal">{children}</div>}
      {!isDisplayed && (
        <div className="mt-2 text-right">
          <button
            className="bg-transparent text-secondary dark:text-secondary-dark text-sm uppercase tracking-wider py-2 px-4 border border-secondary rounded transition ease-in-out duration-150 hover:bg-secondary hover:bg-opacity-15 dark:border-secondary-dark dark:hover:bg-secondary-dark"
            onClick={() => setIsDisplayed(true)}
          >
            Mehr
          </button>
        </div>
      )}
    </div>
  );
}
export default DisplayMore;
