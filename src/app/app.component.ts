import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datas = [
    { id: 1, name: '申请', done: 1 },
    { id: 2, name: '申请完成', done: 2 },
    { id: 3, name: '决裁', done: 3 },
  ];
  addData = '';
  id: any;
  add() {
    if (this.addData == '') {
      return;
    }
    if (this.datas.length == 0) {
      this.id = 1;
    } else {
      this.id = this.datas[this.datas.length - 1].id + 1;
    }
    this.datas.push({ id: this.id, name: this.addData, done: 1 });
    this.addData = '';
  }
  delete(e: any, id: any) {
    e.preventDefault();
    this.datas = this.datas.filter((item) => {
      return id != item.id;
    });
  }
}
