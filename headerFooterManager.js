class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this. innerHTML = `
            <nav>
                    <a href="index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#123C69"><path d="M160-340v-380q0-53 27.5-84.5t72.5-48q45-16.5 102.5-22T480-880q66 0 124.5 5.5t102 22q43.5 16.5 68.5 48t25 84.5v380q0 59-40.5 99.5T660-200l60 60v20h-80l-80-80H400l-80 80h-80v-20l60-60q-59 0-99.5-40.5T160-340Zm320-460q-106 0-155 12.5T258-760h448q-15-17-64.5-28.5T480-800ZM240-560h200v-120H240v120Zm420 80H240h480-60Zm-140-80h200v-120H520v120ZM340-320q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm280 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm-320 40h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm180-480h226-448 222Z"/></svg>
                        Interrail
                    </a>
                    <div class="menu">
                        <a  href="a_propos.html" class="a-propos-nav">À propos</a>
                        <div class="dropdown">
                            <p class="option">Pays</p>
                            <div class="dropdown-child">
                                <a  href="france.html">France</a>
                                <a  href="allemagne.html">Allemagne</a>
                                <a  href="danemark.html">Danemark</a>
                                <a  href="suede.html">Suède</a>
                                <a  href="norvege.html">Norvège</a>
                                <a  href="rep_tcheque.html">République tchèque</a>
                                <a  href="angleterre.html">Angleterre</a>
                                <a  href="espagne.html">Espagne</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <p class="option">Villes</p>
                            <div class="dropdown-child2">
                                <a  href="copenhague.html">Copenhague</a>
                                <a  href="flensburg.html">Flensburg</a>
                            </div>
                        </div>
                    </div>
                </nav>
        `
    }
}

customElements.define('special-header', SpecialHeader)


class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this. innerHTML = `
            <div>
            <a target="_blank" href="https://www.polarsteps.com/JeanneMenager/10505202-interrail" class="lien-icone">
                <img src="/Users/jeannemenager/Desktop/pok/images/polarsteps.jpeg" alt="Logo polarsteps" height="32px" width="32px">
            </a>
            <a target="_blank" href="https://www.instagram.com/" class="lien-icone">
                <img src="/Users/jeannemenager/Desktop/pok/images/instagram.png" alt="Logo Instagram" height="32px" width="32px">
            </a>
        </div>
        `
    }
}

customElements.define('special-footer', SpecialFooter)