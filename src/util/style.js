export const styles = {
    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    padding: 'sm:px-16 px-6 sm:py-12 py-4',
    marginX: 'sm:mx-16 mx-6',
    marginY: 'sm:my-16 my-6',
    margin: 'sm:mx-16 mx-6 sm:my-12 my-4',
    container: 'xl:max-w-[1280px] w-full',
    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-start items-start',
    flexBetween: 'flex justify-between items-center',
    paragraph: 'font-montserrat font-normal text-lightWhite text-4 text-justify leading-[30.8px]',
    headingOne: 'font-montserrat font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]',
    headingTwo: 'font-montserrat font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]',
}

export const layout = {
    section: `md:flex-row flex-col ${styles.paddingY} ${styles.flexCenter}`,
    sectionReverse: `md:flex-row flex-col-reverse ${styles.paddingY} ${styles.flexCenter}`,
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    sectionImage: `flex-1 ${styles.flexCenter} md:ml-10 ml-0 relative`,
    sectionImageReverse: `flex-1 ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
}