import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.page.html',
  styleUrls: ['./manage-project.page.scss'],
})
export class ManageProjectPage implements OnInit {
  project: Project;

  constructor(private projectService: ProjectService,
              private router: Router,
              private errorService: ErrorService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getProject();
  }

  getProject() {
    this.projectService.getAssociatedProject().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.project = resp.project;
      },
    });
  }

  deleteProject() {
    this.projectService.deleteProject(this.project.id).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => { },
      complete: () => {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
