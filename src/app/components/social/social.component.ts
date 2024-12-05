import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnlineUser } from '../usuario/models/online-user.model';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  posts = [
    {
      id: 1,
      userName: 'Paulo Kunrath',
      userPhoto: 'assets/user_profile.jpg',
      content: 'Este é um exemplo de postagem.',
      timestamp: new Date(),
      likes: 5,
      liked: false,
      comments: [
        { user: 'Comentador 1', text: 'Ótima postagem!' },
        { user: 'Comentador 2', text: 'Concordo plenamente.' }
      ],
      showComments: false
    },
  ];

  onlineUsers: OnlineUser[] = [
    {
      name: 'Nicolas Souza',
      photo: '/assets/user_teste1.png',
      status: 'Disponível'
    },
    {
      name: 'Rafa Canada',
      photo: '/assets/user_teste2.png',
      status: 'Com o china'
    }
  ];

  addPost(content: string): void {
    if (!content.trim()) {
      return;
    }
    const newPost = {
      id: this.generateId(),
      userName: 'Paulo Kunrath',
      userPhoto: 'assets/user_profile.jpg',
      content,
      timestamp: new Date(),
      likes: 0,
      liked: false,
      comments: [],
      showComments: false
    };
    this.posts.unshift(newPost);
  }

  toggleLike(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
    }
  }

  toggleComments(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.showComments = !post.showComments;
    }
  }

  addComment(postId: number, commentText: string): void {
    if (!commentText.trim()) {
      return;
    }
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.comments.push({ user: 'Usuário Atual', text: commentText });
    }
  }

  generateId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
