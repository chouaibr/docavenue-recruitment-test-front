import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
  , './bootstrap/dist/css/bootstrap.min.css'
  , './bootstrap/dist/css/bootstrap-theme.min.css' ]
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        this.getPosts();
    }
    title = 'recruitment-test-front-app';

    posts: Post[];

    constructor(private postService: PostService) {
    }

    getPosts(): void {
        this.postService.getPosts()
            .subscribe(posts => this.posts = posts);
  }
}
