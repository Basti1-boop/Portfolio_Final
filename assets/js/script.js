// script.js
    // Liste des projets (objet JavaScript)
    const tec = ['HTML','JavaScript','Figma'];
    const projects = [
        {
            nom: "Maquette site de voyage",
            image: "./assets/img/WA.png",
            lien: "./Wanderly.html",
            description: "Une maquette de site web pour une agence de voyage fictive, mettant en avant des destinations populaires et des offres spéciales.",
            tech : tec[2]
            
        },

        {
            nom: "Maquette site de culture jeune",
            image: "./assets/img/CU.png",
            lien: "./Culture.html",
            description: "Une maquette de site web pour une plateforme culturelle destinée aux jeunes, mettant en avant des événements, des articles et des ressources.",
            tech : tec[2]
        },

        {
            nom: "Site rainbow photo",
            image: "./assets/img/RB.png",
            lien: "./Rainbow.html",
            description: "Un site web test présentant une collection de photographies colorées, avec une mise en page dynamique et des fonctionnalités de partage sur les réseaux sociaux.",
            tech : tec[0]
        },

        {
            nom: "Maquette modernisation site Micromania",
            image: "./assets/img/MI.png",
            lien: "./Micromania.html",
            description: "Maquette de modernisation du site web de Micromania, visant à améliorer l'expérience utilisateur et à intégrer de nouvelles fonctionnalités pour les amateurs de jeux vidéo.",
            tech : tec[2]
        },
        {
            nom:"Site de Street-Food",
            image:"./assets/img/STF.png",
            lien:"./StreetFusion.html",
            description:"Site web pour un fast-food proposant des plats de rue du monde entier, avec un menu interactif et des options de commande en ligne.",
            tech: tec[1]
        }
    ];

    // Sélectionne la grille des projets
    const projectsGrid = document.getElementById('projects-grid');

    // Fonction pour afficher les projets
    function afficherProjets() {
        projects.forEach(projet => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            const projectImage = document.createElement('img');
            projectImage.src = projet.image;
            projectImage.alt = projet.nom;
            projectCard.setAttribute('onclick', `window.location.href='${projet.lien}'`);
            
            projectCard.appendChild(projectImage);


            const projectName = document.createElement('h3');
            projectName.textContent = projet.nom;
            projectCard.appendChild(projectName);

            const projectTech = document.createElement('p2');
            projectTech.textContent = projet.tech;
            projectCard.appendChild(projectTech);

            const projectDescription = document.createElement('p');
            projectDescription.textContent = projet.description;
            projectCard.appendChild(projectDescription);
            
            
                projectsGrid.appendChild(projectCard);
        });
    }

    // Appelle la fonction pour afficher les projets
    afficherProjets();


/*Police principale */
    (function(d) {
        var config = {
        kitId: 'cru2gjw',
        scriptTimeout: 3000,
        async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);


    //Création d'un filtre pour les projets (HTML/CSS, Javascript, Figma et ajout d'un bouton "Tous")
    const filterButtons = document.querySelectorAll('.filter-button button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterProjects(category);
        });
    });

    function filterProjects(category) {
    projectsGrid.innerHTML = ''; // Clear existing projects
    const filteredProjects = category === 'all' ? projects : projects.filter(projet => projet.tech.toLowerCase() === category.toLowerCase());
    filteredProjects.forEach(projet => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        const projectImage = document.createElement('img');
        projectImage.src = projet.image;
        projectImage.alt = projet.nom;
        projectCard.setAttribute('onclick', `window.location.href='${projet.lien}'`);
        projectCard.appendChild(projectImage);
        const projectName = document.createElement('h3');
        projectName.textContent = projet.nom;
        projectCard.appendChild(projectName);
        const projectTech = document.createElement('p2');
        projectTech.textContent = projet.tech;
        projectCard.appendChild(projectTech);
        const projectDescription = document.createElement('p');
        projectDescription.textContent = projet.description;
        projectCard.appendChild(projectDescription);
        projectsGrid.appendChild(projectCard);
    });
}



/* Animations GSAP (à ajouter dans script.js) */

    // Masquer le loader après 3s
    setTimeout(() => {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 1000);
    }, 2000);

    // transition fluide entre l'ecran de chargement et le contenu
    gsap.to('.loader', {opacity: 0, duration: 1, delay: 2, onComplete: () => {
        document.querySelector('.loader').style.display = 'none';
    }});
    


    // Animation des sections lors du défilement
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });
    });

/*Dès qu'on clique sur l'un des boutons de filtre, celui-ci reste dans une autre couleur*/
    const filterBtn = document.querySelectorAll('.filter-button button');
    filterBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtn.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });


