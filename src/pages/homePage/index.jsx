import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation } from 'react-i18next';
import { classNames } from '../../helpers/common.helpers';
import Footer from "../../components/Footer";
import StarField from '../../components/StarField';
import MemberCardList from '../../components/MemberCardList';
import NavBar from "../../components/NavBar";
import FivePanelCarousel from "../../components/FivePanelCarousel";
import Concierge from '../../components/Concierge';
import BrandVideo from '../../components/BrandVideo';
import CookieBanner from '../../components/CookieBanner/CookieBanner';

const HomePage = () => {
    const { scroll } = useLocomotiveScroll();
    const location = useLocation();

    useEffect(() => {
        if (scroll) {
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll]);

    const { t } = useTranslation();

    let pillarCopy = t('home.pillarCopyMastercard');
    let pillarCopy2 = t('home.pillarCopyMastercard2');
    if (window.journey === 'visa') {
        pillarCopy = t('home.pillarCopyVisa');
        pillarCopy2 = t('home.pillarCopyVisa2');
    }

    return (
        <>
            <CookieBanner />
            <NavBar />
            <section className='bg-black pt-20 lg:pt-0 pb-10 lg:pb-10' data-scroll-section>
                <div className='inline-block w-full'>
                    <BrandVideo />
                </div>
            </section>
            <section className='bg-black relative' data-scroll-section>
                <StarField stars={30} />
                <div className="container mx-auto relative py-16">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-20 lg:mx-48">
                            <div>
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey'>{t('home.pillarTitle')}</h2>
                            </div>
                            <div className='mt-8'>
                                <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{ __html: pillarCopy }}></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto relative">
                    <div
                        className={classNames(
                            window.journey === 'visa' ? 'xl:grid-cols-2' : 'xl:grid-cols-2',
                            `grid md:grid-cols-1 gap-20 mx-2 md:mx-20`,
                        )}
                    >
                        <MemberCardList />
                    </div>
                </div>
                <div className="container mx-auto relative mt-4 md:mt-16">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-20 lg:mx-48">
                            <div>
                                <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{ __html: pillarCopy2 }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black pt-10 lg:pt-52 pb-10 lg:pb-52 relative' data-scroll-section>
                <StarField stars={30} />
                <div className="container mx-auto relative py-16">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-20 lg:mx-48">
                            <div>
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey'>{t('home.carouselTitle')}</h2>
                            </div>
                            <div className='mt-8'>
                                <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight'>{t('home.carouselCopy')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto pb-36">
                    <FivePanelCarousel />
                </div>
            </section>
            <section className='bg-black pt-10 lg:pt-52 pb-10 lg:pb-52 relative' data-scroll-section>
                <StarField stars={30} />
                <Concierge />
            </section>
            <section className='bg-black' data-scroll-section>
                <Footer />
            </section>
        </>
    );
};

export default HomePage;
