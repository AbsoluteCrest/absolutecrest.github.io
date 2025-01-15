const MainAbout = () => {
    return (
        <main className="flex flex-col gap-8 row-start-2 sm:items-start">

            <div className="my-20 space-y-20">

                <div className="my-20  rounded-lg p-9 bg-neutral-900 font-sfpro font-bold text-4xl w-3/5">
                    <header className="font-sfpro text-5xl mb-4">Absolute Crest</header>
                    <p className="font-sfpro text-base">Cześć, nazywam się Piotr. 👋<br/>
                        Mam 17 lat i posiadam średniozaawansowane umiejętności w zakresie front-end developmentu,
                        którego uczę się od 4 lat. Obejmuję pracę z nowoczesnymi technologiami i narzędziami.
                        Od kilku miesięcy uczę się Next.js oraz React. Oprócz programowania w wolnym czasie uprawiam
                        sport, szczególnie koszykówkę.
                    </p>
                </div>

                <div className="flex flex-col justify-center h-full font-sfpro font-bold text-4xl">
                    <div className="flex flex-wrap gap-5 justify-center items-center ">
                        <div className="rounded-lg p-9 bg-neutral-900 text-left w-full md:flex-[1_0_30%]  text-base">
                            <header className="font-sfpro text-5xl font-bold mb-6">Tech Stacks</header>

                            <div className="flex justify-between items-center gap-6">

                                <div className="flex items-center">

                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 24 24" height="42" width="42" className="mr-3 flex-shrink-0"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                                    </svg>

                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">Typescript</h2>
                                        <h3 className="text-sm text-neutral-500">Początkujący</h3>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 24 24" className="mr-3 flex-shrink-0" height="56" width="56"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">Javascript</h2>
                                        <h3 className="text-sm text-neutral-500">Średniozaawansowany</h3>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 24 24" className="mr-3 flex-shrink-0" height="56" width="56"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">HTML</h2>
                                        <h3 className="text-sm text-neutral-500">Średniozaawansowany</h3>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 24 24" className="mr-3 flex-shrink-0" height="56" width="56"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">CSS</h2>
                                        <h3 className="text-sm text-neutral-500">Średniozaawansowany</h3>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 24 24" className="mr-3 flex-shrink-0" height="56" width="56"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">Tailwind</h2>
                                        <h3 className="text-sm text-neutral-500">Początkujący</h3>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 24 24" className="mr-3 flex-shrink-0" height="56" width="56"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM15.9999 8H14.6499V12H15.9999V8ZM9.34609 9.70937L15.405 17.5379L16.4591 16.7293L9.68281 8H8V15.9969H9.34609V9.70937Z"></path>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">Next.js</h2>
                                        <h3 className="text-sm text-neutral-500">Początkujący</h3>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center h-full font-sfpro font-bold text-4xl">
                    <div className="flex flex-wrap gap-5 justify-center items-center ">
                        <div className="rounded-lg p-9 bg-neutral-900 text-left w-full md:flex-[1_0_30%] text-base">
                            <header className="font-sfpro text-5xl font-bold mb-6">Narzędzia</header>

                            <div className="flex justify-between items-center gap-6">

                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 24 24" height="42" width="42" className="mr-3 flex-shrink-0"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 0v24h24V0H0zm17.889 2.889c1.444 0 2.667.444 3.667 1.278l-1.111 1.667c-.889-.611-1.722-1-2.556-1s-1.278.389-1.278.889v.056c0 .667.444.889 2.111 1.333 2 .556 3.111 1.278 3.111 3v.056c0 2-1.5 3.111-3.611 3.111-1.5-.056-3-.611-4.167-1.667l1.278-1.556c.889.722 1.833 1.222 2.944 1.222.889 0 1.389-.333 1.389-.944v-.056c0-.556-.333-.833-2-1.278-2-.5-3.222-1.056-3.222-3.056v-.056c0-1.833 1.444-3 3.444-3zm-16.111.222h2.278l1.5 5.778 1.722-5.778h1.667l1.667 5.778 1.5-5.778h2.333l-2.833 9.944H9.723L8.112 7.277l-1.667 5.778H4.612L1.779 3.111zm.5 16.389h9V21h-9v-1.5z"></path>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">Webstorm</h2>
                                        <h3 className="text-sm text-neutral-500">Edytor kodu</h3>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 24 24" className="mr-3 flex-shrink-0" height="56" width="56"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z"></path>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">Node</h2>
                                        <h3 className="text-sm text-neutral-500">Środowisko wykonawcze
                                            Javascript</h3>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 24 24" className="mr-3 flex-shrink-0" height="56" width="56"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m21.62 11.108-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"></path>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">Git</h2>
                                        <h3 className="text-sm text-neutral-500">Kontrola wersji</h3>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg fill="currentColor" width="56" height="56" viewBox="0 0 24 24"
                                         className="mr-3 flex-shrink-0"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">Figma</h2>
                                        <h3 className="text-sm text-neutral-500">Aplikacja projektowania
                                            interfejsu</h3>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                         viewBox="0 0 576 512" className="mr-3 flex-shrink-0" height="56" width="56"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"></path>
                                    </svg>
                                    <div className="text-left2 text-nowrap">
                                        <h2 className="font-sfpro">NPM</h2>
                                        <h3 className="text-sm text-neutral-500">Menadżer pakietów</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
};

export default MainAbout;