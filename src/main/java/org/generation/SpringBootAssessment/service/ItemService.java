package org.generation.SpringBootAssessment.service;

import org.generation.SpringBootAssessment.repository.Entity.Item;

import java.util.List;

public interface ItemService {
    Item save(Item item);
    List<Item> all();
}
