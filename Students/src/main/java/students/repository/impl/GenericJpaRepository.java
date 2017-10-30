package students.repository.impl;

import java.io.Serializable;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import students.repository.GenericRepository;

@Transactional
public class GenericJpaRepository<ID extends Serializable, E extends Serializable> implements GenericRepository<ID, E> {

	@PersistenceContext
	protected EntityManager entityManager;
	private Class<E> entityClass;

	public void setEntityClass(Class<E> entityClass) {
		this.entityClass = entityClass;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<E> findAll() {
		return entityManager.createQuery("from " + entityClass.getName()).getResultList();
	}

	@Override
	public E findOne(ID id) {
		return entityManager.find(entityClass, id);
	}

	@Override
	public void save(E e) {
		entityManager.persist(e);
	}

	@Override
	public void update(E e) {
		entityManager.merge(e);
	}

	@Override
	public void deleteById(ID id) {
		try {
			delete(findOne(id));
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	private void delete(E e) throws Exception {
		entityManager.remove(e);
	}

}
