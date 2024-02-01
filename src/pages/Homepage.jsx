import React from 'react';
import Header from '../components/user/Header';
import Footer from '../components/user/Footer';
import "./homepage.scss";
import sponso01 from '../assets/img/airbnb.png';
import sponso02 from '../assets/img/booking.png';
import sponso03 from '../assets/img/trivago.png';
import sponso04 from '../assets/img/europcar.png';
import sponso05 from '../assets/img/avis.png';
import sponso06 from '../assets/img/civitatis.png';
import sponso07 from '../assets/img/tiqets.png';
import search from '../assets/img/search.png';
import landscape01 from '../assets/img/landscape02.png';
import landscape02 from '../assets/img/landscape01.png';
import landscape03 from '../assets/img/landscape03.png';
import logo from '../assets/img/ChildWood.ai.png';
import video from '../assets/videos/001.mp4';
import thumb01 from '../assets/img/thumb01.png';
import thumb02 from '../assets/img/thumb02.png';
import thumb03 from '../assets/img/thumb03.png';
import thumb04 from '../assets/img/thumb04.png';
import thumb05 from '../assets/img/thumb05.png';
import thumb06 from '../assets/img/thumb06.png';


const HomePage = () => {

    return (
        <body>
        <Header />
            <div className='bloc01'>
                <div className='search'>
                    <h2>Organisez votre séjour de A à Z</h2>
                    <div className='search_bar'>
                        <input type="text" placeholder="Rechercher..." value={0} onChange={0} className='search_inner_bar'/>
                        <img src={search} />
                    </div>
                    <div className='img_sponsors'>
                        <img src={sponso01} className='sponso01'/>
                        <img src={sponso02} className='sponso02'/>
                        <img src={sponso03} className='sponso03'/>
                        <img src={sponso04} className='sponso04'/>
                        <img src={sponso05} className='sponso05'/>
                        <img src={sponso06} className='sponso06'/>
                        <img src={sponso07} className='sponso07'/>
                    </div>
                </div>
            </div>


            <div className='bloc02'>
                <h1>ESCAPE GREEN</h1>
            </div>


            <div className='bloc03'>
                <div className='discover'>
                    <p>Découvrez l'aventure avec Escape Green :</p>
                    <p>des excursions captivantes dans les plus beaux recoins</p>
                    <p>de la France vous attendent.</p>
                    <div className='more'>EN SAVOIR PLUS &gt;</div>
                </div>
                <div className='landscapes'>
                    <div className='landscape 01'>
                        <img src={landscape01} className='landscape01_img'/>
                        <div className='landscape_prices'>à partir de <span>197€</span></div>
                    </div>
                    <div className='landscape 02'>
                        <img src={landscape02} className='landscape02_img'/>
                        <div className='landscape_prices'>à partir de <span>381€</span></div>
                    </div>
                    <div className='landscape 03'>
                        <img src={landscape03} className='landscape03_img'/>
                        <div className='landscape_prices'>à partir de <span>386€</span></div>
                    </div>
                </div>
            </div>


            <div className='bloc04'>
                <video  autoPlay loop muted controls className='video video-bg'>
                    <source src={video} type="video/mp4" />
                    Ton navigateur ne supporte pas la lecture de vidéos.
                </video>  
            </div>


            <div className='bloc05'>
                <div className='bloc05header'>Voyage en</div>
                <p className='p'>pleine nature</p>
                <div className='thumbs_container'>
                    <div className='thumbs'>
                        <img src={thumb01} className='thumb01'/>
                        <div className='thumb_textup'>
                            <p>Coup de coeur de nos voyageurs &gt;</p>
                        </div>
                    </div>
                    <div className='thumbs'>
                        <img src={thumb02} className='thumb02'/>
                        <div className='thumb_textup'>
                            <p>Coup de coeur de nos voyageurs &gt;</p>
                        </div>
                    </div>
                    <div className='thumbs'>
                        <img src={thumb03} className='thumb03'/>
                        <div className='thumb_textup'>
                            <p>Coup de coeur de nos voyageurs &gt;</p>
                        </div>
                    </div>
                    <div className='thumbs'>
                        <img src={thumb04} className='thumb04'/>
                        <div className='thumb_textdown'>
                            <p>Coup de coeur de nos voyageurs &gt;</p>
                        </div>
                    </div>
                    <div className='thumbs'>
                        <img src={thumb05} className='thumb05'/>
                        <div className='thumb_textdown'>
                            <p>Coup de coeur de nos voyageurs &gt;</p>
                        </div>    
                    </div>
                    <div className='thumbs'>
                        <img src={thumb06} className='thumb06'/>
                        <div className='thumb_textdown'>
                            <p>Coup de coeur de nos voyageurs &gt;</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bloc06'>
                <h3>Des étapes jusqu’au départ en voyage</h3>
                <div className='title1'>1</div>
                <div className='text1'>Trouver des services pour une période et
un nombre de personnes spécifiques.</div>
                <div className='title2'>2</div>
                <div className='text2'>Soumettre un devis en ligne via le site web.</div>
                <div className='title3'>3</div>
                <div className='text3'>L’équipe d’Escape Game prend contact avec le client
pour présenter son séjour, détaillé jour par jour.</div>
                <div className='title4'>4</div>
                <div className='text4'>Confirmez votre réservation en procédant
au paiement via une page sécurisée.</div>
                <div className='title5'>5</div>
                <div className='text5'>Mail de confirmation détaillant le séjour, jour par jour.</div>
                <div className='title6'>6</div>
                <div className='text6'>Départ en voyage !</div>
            </div>


            <div className='bloc07'>
                <div className='bloc7text textone'>
                <span>Escape Green</span>, spécialiste des voyages en pleine nature, propose une expérience unique pour les amoureux de
l’aventure et de la découverte. Notre service se distingue par son engagement à offrir des escapades exceptionnelles au
cœur de la nature, alliant aventure, détente et respect de l’environnement.
                </div>
                <div className='bloc7text'>
                <span>Séjours insolites</span> : Escape Green propose des séjours insolites dans des endroits préservés et peu fréquentés,
permettant aux voyageurs de se reconnecter avec la nature de manière authentique. Des cabanes perchées aux
campements éco-responsables, chaque hébergement est soigneusement sélectionné pour offrir une expérience unique
et immersive.
                </div>
                <div className='bloc7text'>
                <span>Activités en plein air</span> : Nos programmes incluent une variété d’activités en plein air pour satisfaire les passionnés
d’aventure. Randonnées, kayak, observation de la faune, et bien d’autres activités sont organisées dans le respect de
l’écosystème local. Les guides expérimentés partagent leurs connaissances sur la nature environnante, créant une
expérience éducative et enrichissante.
                </div>
                <div className='bloc7text'>
                <span>Gastronomie locale</span> : Escape Green valorise la cuisine locale et met en avant les produits régionaux. Les repas sont
préparés avec des ingrédients locaux et organiques, offrant aux voyageurs une expérience culinaire authentique qui
reflète la richesse de la région visitée.
                </div>
                <div className='bloc7text'>
                <span>Préservation de l’environnement</span> : Nous nous engageons à minimiser notre impact sur l’environnement. Escape Green
veille à la durabilité de ses activités en adoptant des pratiques éco-responsables, telles que le recyclage, la réduction des
déchets et la sensibilisation environnementale.
                </div>
                <div className='bloc7text'>
                <span>Bien-être en nature</span> : Pour ceux qui cherchent la détente, Escape Green propose également des séjours axés sur le
bien-être en nature. Des sessions de yoga en plein air, des massages relaxants et des moments de méditation
permettent aux voyageurs de se ressourcer au cœur de paysages exceptionnels.
                </div>
                <div className='bloc7text'>
                En choisissant Escape Green, les voyageurs s’ouvrent à une expérience immersive, respectueuse de la nature, et créent
des souvenirs inoubliables au sein des joyaux naturels de notre planète.
                </div>
            </div>
        <Footer />
        </body>
    )
}





























// const HomePage = () => {
//   return (
//     <body>
//       <main>
//         <Header />
//         <div className='bg_home_01'>
//             <div className='search_container'>
//                 <h2>Organisez votre séjour de A à Z</h2>
//                 <div className='search_bar'>
//                     <input type="text" placeholder="Rechercher..." value={0} onChange={0} className='search_inner_bar'/>
//                     <img src={search} />
//                 </div>
//                 <div className='img_sponsors'>
//                     <img src={sponso01} className='sponso01'/>
//                     <img src={sponso02} className='sponso02'/>
//                     <img src={sponso03} className='sponso03'/>
//                     <img src={sponso04} className='sponso04'/>
//                     <img src={sponso05} className='sponso05'/>
//                     <img src={sponso06} className='sponso06'/>
//                     <img src={sponso07} className='sponso07'/>
//                 </div>

//             </div>
//         </div>
//         <div className='title'>
//             <h1>ESCAPE GREEN</h1>
//         </div>
//         <div className='bg_home_02'>
//             <div className='decouvrez'>
                
//                 <p>Découvrez l'aventure Escape Green :</p>
//                 <p>des excursions captivantes dans les plus beaux recoins</p>
//                 <p>de la France vous attendent.</p>
//                 <div className='more'>EN SAVOIR PLUS &gt;</div>
//             </div>
//             <div className='landscape'>
//                 <div>
//                     <img src={landscape02} className='land_img'/>
//                     <p>à partir de</p>
//                     <p><span>197€</span></p>
//                 </div>
//                 <div>
//                     <div><img src={landscape01} className='land_img'/></div>
//                     <p>à partir de</p>
//                     <p><span>381€</span></p>
//                 </div>
//                 <div>
//                     <img src={landscape03} className='land_img'/>
//                     <p>à partir de</p>
//                     <p><span>386€</span></p>
//                 </div>
//             </div><div className='degrade'></div>            
//         </div>
//         <div className='bg_home_03'>            
//             {/* <div className='flex_logo'><img src={logo} /></div>       */}
//             <video controls className='video video-bg'>
//                 <source src={video} type="video/mp4" />
//                 Ton navigateur ne supporte pas la lecture de vidéos.
//             </video>  
//         </div>
//         <div className='bg_home_04'>
//             <h2>Voyage en</h2><h2> pleine nature</h2>
//         </div>
//         <h1><strong>Escape Green</strong> est une société spécialisée dans l'organisation de voyages en pleine nature.</h1>
//         <div>
//             Du choix du parcours, aux visites en passant par l'hébergement, Escape Green s'occupe de tout (ou presque), notamment grâce à des sociétés partenaires de confiace !
//         </div>
//         <h2>Vos étapes jusqu'à votre départ :</h2>
//         <div>
//             Recherchez les services pour la période et le nombre de personnes désirée(s)
//         </div>
//         <div>
//             Envoyez un devis en ligne via le site
//         </div>
//         <div>
//             L'équipe d'Escape Green vous contacte pour vous présenter votre séjour jour par jour
//         </div>
//         <div>
//             Le paiement s'effectue via une page sécurisée pour confirmer les réservations
//         </div>
//         <div>
//             Vous recevez un mail de confirmation avec le séjour décrit jour par jour
//         </div>
//         <div>
//             Tout est ok, il ne vous reste plus qu'à profiter !
//         </div>
//         <div>
//             Organisation du séjour sur l'ensemble des vacances
//         </div>
//         <div>
//             Réservation du ou des hébergements
//         </div>
//         <div>
//             Réservation d'un véhicule
//         </div>
//         <div>
//             Réservations pour des activités ou des visites
//         </div>
//         <div>
//             Réservations dans des restaurants et bars
//         </div>
        
//         <Footer />
//         </main>
//     </body>
//   );
// };

export default HomePage;