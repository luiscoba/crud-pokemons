export interface Pokemon {
  id?: number;
  name?: string;
  image?: string;
  type?: 'normal';
  hp?: number;
  attack?: number;
  defense?: number;
  idAuthor?: number;
  created_at?: string;
  updated_at?: string;
}
