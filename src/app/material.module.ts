import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSnackBarModule } from '@angular/material/snack-bar'


@NgModule(
    {
        imports: [
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatFormFieldModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatSidenavModule,
            MatListModule,
            MatTabsModule,
            MatCardModule,
            MatSelectModule,
            MatProgressSpinnerModule,
            MatDialogModule,
            MatTableModule,
            MatPaginatorModule,
            MatSnackBarModule
        ],
        exports: [
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatFormFieldModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatSidenavModule,
            MatListModule,
            MatTabsModule,
            MatCardModule,
            MatSelectModule,
            MatProgressSpinnerModule,
            MatDialogModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatSnackBarModule
        ]
    }
)
export class MaterialModule { }