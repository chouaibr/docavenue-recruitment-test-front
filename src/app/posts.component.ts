import { OnInit, Component } from '@angular/core';

import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './posts.component.html',
  styleUrls: ['./app.component.css']
})
export class PostsComponent implements OnInit {

    constructor(
    private postService: PostService) { }

    posts = this.postService.getPosts();

    ngOnInit(): void {
        this.postService.getPosts();
    }
}