package students.repository.impl;

import java.io.Serializable;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import students.repository.GenericRepository;

public abstract class GenericJpaRepository<T extends Serializable, ID extends Serializable>
		implements GenericRepository<T, ID> {

	@PersistenceContext
	protected EntityManager entityManager;
	private Class<T> entityClass;

	protected GenericJpaRepository(Class<T> entityClass) {
		this.entityClass = entityClass;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<T> findAll() {
		Query query = entityManager.createQuery("from " + entityClass.getName());

		return query.getResultList();
	}

	@Override
	public void deleteById(ID id) {
		entityManager.remove(findOne(id));
	}

	@Override
	public boolean existsById(ID id) {
		return (findOne(id) != null);
	}

	@Override
	public T findOne(ID id) {
		return entityManager.find(entityClass, id);
	}

	@Override
	public void save(T e) {
		entityManager.persist(e);
	}

	@Override
	public void update(T e) {
		entityManager.merge(e);
	}

}

