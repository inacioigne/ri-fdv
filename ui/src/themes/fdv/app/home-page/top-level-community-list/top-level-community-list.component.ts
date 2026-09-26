import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { TopLevelCommunityListComponent as BaseComponent } from '../../../../../app/home-page/top-level-community-list/top-level-community-list.component';
import { ErrorComponent } from '../../../../../app/shared/error/error.component';
import { ThemedLoadingComponent } from '../../../../../app/shared/loading/themed-loading.component';
// import { ObjectCollectionComponent } from '../../../../../app/shared/object-collection/object-collection.component';
import { VarDirective } from '../../../../../app/shared/utils/var.directive';

@Component({
  selector: 'ds-themed-top-level-community-list',
  styleUrls: ['./top-level-community-list.component.scss'],
  // styleUrls: ['../../../../../app/home-page/top-level-community-list/top-level-community-list.component.scss'],
  templateUrl: './top-level-community-list.component.html',
  // templateUrl: '../../../../../app/home-page/top-level-community-list/top-level-community-list.component.html',
  imports: [
    AsyncPipe,
    ErrorComponent,
    // ObjectCollectionComponent,
    RouterLink,
    ThemedLoadingComponent,
    TranslateModule,
    VarDirective,
  ],
})
export class TopLevelCommunityListComponent extends BaseComponent {
  readonly communities = [
    {
      uuid: '770d78a7-9195-4c6b-98f7-29bb9b266f97',
      name: 'Programa de Pós-Graduação em Direitos e Garantias Fundamentais',
      text: 'Inclui publicações de autores vinculados ao Programa de Pós-Graduação em Direitos e Garantias Fundamentais da FDV'
    },
    {
      uuid: '71997e08-f5cf-48d2-ad88-e1c831593272',
      name: 'Direito - Graduação',
      text: "Reúne trabalhos publicados por docentes e discentes da graduação em Direito"
    },
    {
      uuid: '956fbc2b-fbc1-4e70-8403-5ac958002794',
      name: 'FDV Publicações',
      text: "Reúne obras publicadas pela Editora FDV Publicações"
    },
     {
      uuid: '7c2d5859-71ae-4ea5-a8a8-3168bd7bcae7',
      name: 'Editora UniversidadES',
      text: "Obras publicadas pela Editora UniversidadES"
    }
  ];
}
