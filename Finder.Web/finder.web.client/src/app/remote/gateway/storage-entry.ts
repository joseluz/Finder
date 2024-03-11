
abstract class StorageEntry<T> {
  protected constructor(protected key: string, private storage: Storage) {}

  get(): T | null {
    const entity = this.storage.getItem(this.key);
    if (entity) {
      return JSON.parse(entity);
    }
    return null;
  }

  set(item: T): void {
    this.storage.setItem(this.key, JSON.stringify(item));
  }

  remove(): void {
    this.storage.removeItem(this.key);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LocalStorageEntry<T> extends StorageEntry<T> {
  constructor(protected override key: string) {
    super(key, localStorage);
  }
}

// valid per window in the browser
class SessionStorageEntry<T> extends StorageEntry<T> {
  constructor(protected override key: string) {
    super(key, sessionStorage);
  }
}
