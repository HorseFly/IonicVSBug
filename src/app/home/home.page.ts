import { Component } from '@angular/core';

export interface Department {
  id: number;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  departments: Department[] = [
    { id: 1, name: 'Department 1' },
    { id: 2, name: 'Department 2' },
    { id: 3, name: 'Department 3' },
    { id: 4, name: 'Department 4' }];

  /** Track By */
  public trackBy(index: number, value: Department) {
    return value.id;
  }

  private deleteDepartment(dept: Department, evt: Event) {
    evt.stopPropagation();
    evt.preventDefault();

    const idx = this.departments.findIndex(m => m.id === dept.id);
    this.departments.splice(idx, 1);
  }
}
