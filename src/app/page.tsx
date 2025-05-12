export default function Home() {
	return (
		<main>
			<header>
				<img src="/Logo_Dev.png" alt="logo Romain Lemonnier" />
				<section className="menu_nav">
					<ul>
						<a href="#sexo">Projets</a>
						<a href="#offre" className="orange_ul">
							|
						</a>

						<a href="#offre">Compétences</a>
						<a href="#offre" className="orange_ul">
							|
						</a>
						<a href="#contact">Contact</a>
					</ul>
				</section>
			</header>
			<section className="banniere">
				<article className="ban_nom">
					<img
						src="/Logo_Dev.png"
						alt="logo Romain Lemonnier"
						className="banniere_img"
					/>
					<p className="nom_ban">LEMONNIER ROMAIN</p>

					<p className="met_ban">
						DEVELOPPEUR <br /> / DESIGNER <br />
					</p>
					<img src="/element_graphic.png" alt="element graphique" />
				</article>
				<hr className="bar_blanche" />
				<ul className="ban_menu">
					<a href="#a_propos">À PROPOS</a>
					<a href="#projets">PROJETS</a>
					<a href="#competences">COMPÉTENCES</a>
					<a href="#contact">CONTACT</a>
				</ul>
			</section>

			<section className="a_propos" id="a_propos">
				<div className="propos_title">
					<hr />
					<h1> À Propos</h1>
					<hr />
				</div>
				<article className="propos_int">
					<p>
						Après une expérience de 10 ans en tant que graphiste, j'ai décidé
						d'élargir mes compétences en me formant au développement web. Je
						viens tout juste de terminer une formation de Développeur
						Full-stack, et je suis à la recherche d’une alternance à partir de
						septembre pour un mastère Développeur Front-End, pour continuer à me
						perfectionner dans un environnement professionnel.
						<br />
						<br /> Passionnée par le design sous toutes ses formes, j’attache
						une grande importance à l’expérience utilisateur, à l’esthétique des
						interfaces et à la qualité du code. Mon objectif est de créer des
						expériences web à la fois élégantes, intuitives et performantes.
						<br />
						<br /> Aujourd’hui, je souhaite mettre à profit mon double profil
						créatif et technique pour contribuer à des projets ambitieux et
						évoluer au sein d’une équipe dynamique. N'hésitez pas à me contacter
						si mon profil vous intéresse ! <br />
						<br />
						<img
							src="/element_graphic.png"
							alt="element graphique"
							className="graphic_orange"
						/>
					</p>
					<img
						src="/moi_orange2.jpg"
						alt="Romain Lemonnier"
						className="moi_orange"
					/>
				</article>
			</section>

			<section className="projets" id="projets">
				<div className="projets_title">
					<hr />
					<h1> Projets</h1>
					<hr />
				</div>
				<article className="projets_int">
					<div className="projets_description">
						<h2>Street Art'Venture</h2>
						<p>
							Projet réalisé dans le cadre de ma formation Développeur
							Full-Stack Web & Web mobile, en groupe de 4 personnes.
							<br />
							<br />
							Street’Art Venture est une application web interactive permettant
							aux utilisateurs de découvrir, explorer et référencer les œuvres
							de street art de leur ville. À l’aide de leur smartphone, ils
							peuvent prendre en photo les œuvres, puis, après validation par
							les administrateurs, gagner des points.
							<br />
							<br />
							Technologies utilisées : Vite.js / React / TypeScript / Node.js /
							Express.js / Figma / Adobe Illustrator
						</p>
					</div>
					<div>
						<iframe
							src="https://app.videas.fr/embed/media/6d7f3859-675c-4bff-b4d0-e7cd2b0f849c/?player=f2b1a8a9-bc32-40bd-9c51-21d58b618fc1"
							title="Vidéo de présentation"
							className="iframe_video"
							allowFullScreen
						/>
					</div>
				</article>
				<img
					src="/element_graphic.png"
					alt="element graphique"
					className="graphic_orange"
				/>
				<div className="projets_int_inv">
					<div>
						<iframe
							src="https://app.videas.fr/embed/media/36728dc8-febc-428f-a7b2-9663ceff3320/?player=f2b1a8a9-bc32-40bd-9c51-21d58b618fc1"
							title="Vidéo de présentation"
							className="iframe_video"
							allowFullScreen
						/>
					</div>
					<div className="projets_description">
						<h2>Nant'Event</h2>
						<p>
							Projet réalisé dans le cadre de ma formation Développeur
							Full-Stack Web & Web mobile, en groupe de 4 personnes.
							<br />
							<br />
							Nant'Event est une application web développée avec React, qui
							répertorie tous les événements se déroulant à Nantes, classés par
							catégories telles que Spectacles, Sport ou Enfants, par exemple.
							<br />
							<br />
							Technologies utilisées : Vite.js / React / TypeScript / Figma /
							Adobe Illustrator
						</p>
					</div>
				</div>
				<img
					src="/element_graphic.png"
					alt="element graphique"
					className="graphic_orange"
				/>
				<div className="projets_int">
					<div className="projets_description">
						<h2>Lost Movies</h2>
						<p>
							Projet réalisé seul dans le cadre de ma formation de Développeur
							Full-Stack Web & Web Mobile, lors d’un examen d’une durée de trois
							jours.
							<br />
							<br />
							Lost Movies est un petit site internet qui répertorie les
							meilleurs films méconnus du grand public. Il intègre une
							fonctionnalité permettant d'ajouter des films.
							<br />
							<br />
							Technologies utilisées : Vite.js / React / TypeScript / Node.js /
							Express.js / Figma / Adobe Illustrator
						</p>
					</div>
					<div>
						<iframe
							src="https://app.videas.fr/embed/media/cfd0730b-dbaf-43a1-a982-6c04872980bd/?player=f2b1a8a9-bc32-40bd-9c51-21d58b618fc1"
							title="Vidéo de présentation"
							className="iframe_video"
							allowFullScreen
						/>
					</div>
				</div>
				<img
					src="/element_graphic.png"
					alt="element graphique"
					className="graphic_orange"
				/>
				<div className="projets_int_inv">
					<div>
						<iframe
							src="https://app.videas.fr/embed/media/7fb7a40f-9496-4816-9e74-de950bfc5cf9/?player=f2b1a8a9-bc32-40bd-9c51-21d58b618fc1"
							title="Vidéo de présentation"
							className="iframe_video"
							allowFullScreen
						/>
					</div>
					<div className="projets_description">
						<h2>Good Vibes</h2>
						<p>
							Projet réalisé lors d'un ProtoJam de 2 jours sur le thème de la
							bienveillance, en groupe de 4 personnes.
							<br />
							<br />
							Good Vibes est un site internet qui répertorie toutes les
							actualités positives du moment, classées par catégories telles que
							Société ou Environnement, par exemple.
							<br />
							<br />
							Technologies utilisées : Vite.js / React / TypeScript / Figma /
							Adobe Illustrator
						</p>
					</div>
				</div>
				<img
					src="/element_graphic.png"
					alt="element graphique"
					className="graphic_orange"
				/>
				<div className="projets_int">
					<div className="projets_description">
						<h2>Lucille BATY - Thérapeute</h2>
						<p>
							Projet réalisé seul pour une amie qui avait besoin d'un site
							vitrine pour son activité.
							<br />
							<br />
							Technologies utilisées : Next.js / Figma / Adobe Illustrator
						</p>
					</div>
					<div>
						<iframe
							src="https://app.videas.fr/embed/media/336f5114-4dc5-4c82-8d5f-82bfc7f030b7/?player=f2b1a8a9-bc32-40bd-9c51-21d58b618fc1"
							title="Vidéo de présentation"
							className="iframe_video"
							allowFullScreen
						/>
					</div>
				</div>
			</section>

			<section className="competences" id="competences">
				<div className="competences_title">
					<hr />
					<h1>Compétences</h1>
					<hr />
				</div>
				<div className="comp_images">
					<img src="/html.png" alt="html" className="img_comp" />
					<img src="/css.png" alt="css" className="img_comp" />
					<img src="/javascript.png" alt="javascript" className="img_comp" />
					<img src="/react.png" alt="react" className="img_comp" />
					<img src="/next.png" alt="next" className="img_comp" />
					<img src="/figma.png" alt="figma" className="img_comp" />
					<img src="/photoshop.png" alt="photoshop" className="img_comp" />
					<img src="/illustrator.png" alt="illustrator" className="img_comp" />
					<img src="/lightroom.png" alt="lightroom" className="img_comp" />
				</div>
				<div className="graphic">
					<img
						src="/element_graphic.png"
						alt="element graphique"
						className="graphic_orange"
					/>
				</div>
			</section>

			<section id="contact" className="contact">
				<div className="contact_title">
					<hr />
					<h1>Contact</h1>
					<hr />
				</div>
				<article className="contact_titre_texte">
					<img
						src="/Logo_Dev.png"
						alt="logo Romain Lemonnier"
						className="banniere_img"
					/>
					<p> Romain LEMONNIER</p>
				</article>
				<img
					src="/element_graphic.png"
					alt="element graphique"
					className="graphic_orange"
				/>
				<div className="contact_texte">
					<p>
						lemonnier.romain13@gmail.com
						<br />
						Github :{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/RomainLmn44"
						>
							github.com/RomainLmn44
						</a>
						<br />
						Portfolio Graphiste :{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://rmndesign.ultra-book.com/"
						>
							rmndesign.ultra-book.com
						</a>
						<br />
						Boutique Etsy :{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.etsy.com/shop/LesAffichesDeRomain"
						>
							etsy.com/shop/LesAffichesDeRomain
						</a>
					</p>
				</div>
			</section>
		</main>
	);
}
