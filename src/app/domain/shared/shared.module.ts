import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './services/loading/loading.service';
import { OpenAiService } from './services/openai/openai.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [LoadingComponent, DialogComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [LoadingService, OpenAiService],
  exports: [LoadingComponent, DialogComponent],
})
export class SharedModule {}
