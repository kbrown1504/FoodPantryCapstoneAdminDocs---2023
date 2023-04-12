'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">adminApp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-594c88f5942d3e5a0fb2e977f88e13d683b7faf9df8bda185d6b2959b58d32ae66bd2d71312e205c5557d54358045ff084602d367a2b346756741d65e36e7a46"' : 'data-target="#xs-components-links-module-AppModule-594c88f5942d3e5a0fb2e977f88e13d683b7faf9df8bda185d6b2959b58d32ae66bd2d71312e205c5557d54358045ff084602d367a2b346756741d65e36e7a46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-594c88f5942d3e5a0fb2e977f88e13d683b7faf9df8bda185d6b2959b58d32ae66bd2d71312e205c5557d54358045ff084602d367a2b346756741d65e36e7a46"' :
                                            'id="xs-components-links-module-AppModule-594c88f5942d3e5a0fb2e977f88e13d683b7faf9df8bda185d6b2959b58d32ae66bd2d71312e205c5557d54358045ff084602d367a2b346756741d65e36e7a46"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageModule.html" data-type="entity-link" >ForgotPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgotPasswordPageModule-a18d63aa7d84186d58694e8412821355fe1553d28a1e23043f19dcb58a31e780c9aea6f92bc1b7bca01bd2da2cfd8ce381240e2940fe938265b3359c38c82f7b"' : 'data-target="#xs-components-links-module-ForgotPasswordPageModule-a18d63aa7d84186d58694e8412821355fe1553d28a1e23043f19dcb58a31e780c9aea6f92bc1b7bca01bd2da2cfd8ce381240e2940fe938265b3359c38c82f7b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgotPasswordPageModule-a18d63aa7d84186d58694e8412821355fe1553d28a1e23043f19dcb58a31e780c9aea6f92bc1b7bca01bd2da2cfd8ce381240e2940fe938265b3359c38c82f7b"' :
                                            'id="xs-components-links-module-ForgotPasswordPageModule-a18d63aa7d84186d58694e8412821355fe1553d28a1e23043f19dcb58a31e780c9aea6f92bc1b7bca01bd2da2cfd8ce381240e2940fe938265b3359c38c82f7b"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageRoutingModule.html" data-type="entity-link" >ForgotPasswordPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'data-target="#xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' :
                                            'id="xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryManagementPageModule.html" data-type="entity-link" >InventoryManagementPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InventoryManagementPageModule-5aacd1423321d0228bccf01b416887fb37bbaa5b76524c7c5f094a559d642d51e195618781787f953c7caab9e97d10ee7e37c43813e6885745d8ccfe711576e6"' : 'data-target="#xs-components-links-module-InventoryManagementPageModule-5aacd1423321d0228bccf01b416887fb37bbaa5b76524c7c5f094a559d642d51e195618781787f953c7caab9e97d10ee7e37c43813e6885745d8ccfe711576e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InventoryManagementPageModule-5aacd1423321d0228bccf01b416887fb37bbaa5b76524c7c5f094a559d642d51e195618781787f953c7caab9e97d10ee7e37c43813e6885745d8ccfe711576e6"' :
                                            'id="xs-components-links-module-InventoryManagementPageModule-5aacd1423321d0228bccf01b416887fb37bbaa5b76524c7c5f094a559d642d51e195618781787f953c7caab9e97d10ee7e37c43813e6885745d8ccfe711576e6"' }>
                                            <li class="link">
                                                <a href="components/AddDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InventoryManagementPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryManagementPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryManagementPageRoutingModule.html" data-type="entity-link" >InventoryManagementPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-6bb6e3580de29128c1a269b44aecd6d7653a0f4474cc753d10781e74119b36ceac81731e73fd455ac40d447cf125d9fa890a1ce1ad8eb4123a31d95ba226319a"' : 'data-target="#xs-components-links-module-LoginPageModule-6bb6e3580de29128c1a269b44aecd6d7653a0f4474cc753d10781e74119b36ceac81731e73fd455ac40d447cf125d9fa890a1ce1ad8eb4123a31d95ba226319a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-6bb6e3580de29128c1a269b44aecd6d7653a0f4474cc753d10781e74119b36ceac81731e73fd455ac40d447cf125d9fa890a1ce1ad8eb4123a31d95ba226319a"' :
                                            'id="xs-components-links-module-LoginPageModule-6bb6e3580de29128c1a269b44aecd6d7653a0f4474cc753d10781e74119b36ceac81731e73fd455ac40d447cf125d9fa890a1ce1ad8eb4123a31d95ba226319a"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderManagementPageModule.html" data-type="entity-link" >OrderManagementPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrderManagementPageModule-4a77145f356fa7944a81f28b9934f081035ea88c1da4a0246e15767929486303c1fb9b4c6fb0be0e0a22b2da1aab222b7f2c1d82c4cdf0e4ad1cd3176a726590"' : 'data-target="#xs-components-links-module-OrderManagementPageModule-4a77145f356fa7944a81f28b9934f081035ea88c1da4a0246e15767929486303c1fb9b4c6fb0be0e0a22b2da1aab222b7f2c1d82c4cdf0e4ad1cd3176a726590"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrderManagementPageModule-4a77145f356fa7944a81f28b9934f081035ea88c1da4a0246e15767929486303c1fb9b4c6fb0be0e0a22b2da1aab222b7f2c1d82c4cdf0e4ad1cd3176a726590"' :
                                            'id="xs-components-links-module-OrderManagementPageModule-4a77145f356fa7944a81f28b9934f081035ea88c1da4a0246e15767929486303c1fb9b4c6fb0be0e0a22b2da1aab222b7f2c1d82c4cdf0e4ad1cd3176a726590"' }>
                                            <li class="link">
                                                <a href="components/EditOrderDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditOrderDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderManagementPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderManagementPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewOrderDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewOrderDialog</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderManagementPageRoutingModule.html" data-type="entity-link" >OrderManagementPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PantryStatisticsPageModule.html" data-type="entity-link" >PantryStatisticsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PantryStatisticsPageModule-6b7c6fe9a71b45fa37290af80064bfa79d36d705c15f90330e0ae45d3dc1157756e8607157f690a76c9debfd62f88085e9c22adc9f3db6298b6f8ce1cb50c669"' : 'data-target="#xs-components-links-module-PantryStatisticsPageModule-6b7c6fe9a71b45fa37290af80064bfa79d36d705c15f90330e0ae45d3dc1157756e8607157f690a76c9debfd62f88085e9c22adc9f3db6298b6f8ce1cb50c669"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PantryStatisticsPageModule-6b7c6fe9a71b45fa37290af80064bfa79d36d705c15f90330e0ae45d3dc1157756e8607157f690a76c9debfd62f88085e9c22adc9f3db6298b6f8ce1cb50c669"' :
                                            'id="xs-components-links-module-PantryStatisticsPageModule-6b7c6fe9a71b45fa37290af80064bfa79d36d705c15f90330e0ae45d3dc1157756e8607157f690a76c9debfd62f88085e9c22adc9f3db6298b6f8ce1cb50c669"' }>
                                            <li class="link">
                                                <a href="components/PantryStatisticsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PantryStatisticsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PantryStatisticsPageRoutingModule.html" data-type="entity-link" >PantryStatisticsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link" >ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-37217966bcaa82749fe92af2f675e927490604e7d492edce9c054a9b3469b943048396367d4cf23d8a722265d7296d765db17f1ba136dbfb3644fcb1ba6c2f63"' : 'data-target="#xs-components-links-module-ProfilePageModule-37217966bcaa82749fe92af2f675e927490604e7d492edce9c054a9b3469b943048396367d4cf23d8a722265d7296d765db17f1ba136dbfb3644fcb1ba6c2f63"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-37217966bcaa82749fe92af2f675e927490604e7d492edce9c054a9b3469b943048396367d4cf23d8a722265d7296d765db17f1ba136dbfb3644fcb1ba6c2f63"' :
                                            'id="xs-components-links-module-ProfilePageModule-37217966bcaa82749fe92af2f675e927490604e7d492edce9c054a9b3469b943048396367d4cf23d8a722265d7296d765db17f1ba136dbfb3644fcb1ba6c2f63"' }>
                                            <li class="link">
                                                <a href="components/EditDetailsDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditDetailsDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageRoutingModule.html" data-type="entity-link" >ProfilePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignupPageModule.html" data-type="entity-link" >SignupPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignupPageModule-b1a7bd6848be852ec44c81adce547c4af28e2bb344017c130ca0feccc995abfd096a581728fe2540c41566b3dd9c86c6d825e4e95b701010eb3d9a221f0c7d90"' : 'data-target="#xs-components-links-module-SignupPageModule-b1a7bd6848be852ec44c81adce547c4af28e2bb344017c130ca0feccc995abfd096a581728fe2540c41566b3dd9c86c6d825e4e95b701010eb3d9a221f0c7d90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupPageModule-b1a7bd6848be852ec44c81adce547c4af28e2bb344017c130ca0feccc995abfd096a581728fe2540c41566b3dd9c86c6d825e4e95b701010eb3d9a221f0c7d90"' :
                                            'id="xs-components-links-module-SignupPageModule-b1a7bd6848be852ec44c81adce547c4af28e2bb344017c130ca0feccc995abfd096a581728fe2540c41566b3dd9c86c6d825e4e95b701010eb3d9a221f0c7d90"' }>
                                            <li class="link">
                                                <a href="components/SignupPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupPageRoutingModule.html" data-type="entity-link" >SignupPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseService.html" data-type="entity-link" >FirebaseService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Pantry.html" data-type="entity-link" >Pantry</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});