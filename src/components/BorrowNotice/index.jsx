import React from 'react';
import { useTranslation } from 'react-i18next';

const BorrowNotice = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-900 pt-6 md:pt-10 pb-10 md:pb-10" data-scroll-section>
      <div className="inline-block w-full">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-48">
            <div>
              <h2
                className="text-sm md:text-2xl text-center tracking-custom leading-10 text-light-grey"
                dangerouslySetInnerHTML={{ __html: t('borrowNotice.title') }}
              ></h2>
              <h2
                className="text-xs md:text-xl text-center tracking-custom leading-10 text-light-grey"
                dangerouslySetInnerHTML={{ __html: t('borrowNotice.terms') }}
              ></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BorrowNotice;
